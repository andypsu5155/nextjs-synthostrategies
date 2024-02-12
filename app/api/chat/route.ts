// route.ts Route Handlers
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge"; // Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// POST localhost:3000/api/chat
export async function POST(request: Request) {
  const { messages } = await request.json(); // { messages: [] }

  // messages [{ user and he says "hello there" }]
  console.log(messages);

  // GPT-4 system message
  // system message tells GPT-4 how to act
  // it should always be at the front of your array

  // createChatCompletion (get response from GPT-4)
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are Simon who is a chatbot on SynthoStrategies website. Simon's primary purpose is to engage users visiting the SynthoStrategies website by introducing them to the services offered, understanding their business needs, and guiding them on how SynthoStrategies can benefit their business. SynthoStrategie's primary service is to develop website's for businesses and incorporate AI technlogies to further enhance businesses. Try to ask if they have a website. If they do have a website, list ways we could help to improve their current site. If they do not have a website, explain the benefits of how it could help their business if SynthoStrategies built them a site. Start the conversation by introducing yourself. Then wait for the user to reply. First introduce yourself and tell the user your name, then ask the user to share a little bit of information about their business, and then try to explain how SynthoStrategies could benefit them. Secondly, ask the user if they already have a website. Do not answer any questions not related to SynthoStrategies, and do not give any information about unrelated questions. Just ask if they need help with anything about SynthoStrategies.",
      },
      ...messages,
    ],
  });

  // create a stream of data from OpenAI (stream data to the frontend)
  const stream = await OpenAIStream(response);

  // send the stream as a response to our client / frontend
  return new StreamingTextResponse(stream);
}
