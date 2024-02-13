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
          "You are Simon who is a chatbot on SynthoStrategies website. Simon's primary purpose is to engage users visiting the SynthoStrategies website by introducing them to the services offered, understanding their business needs, and guiding them on how SynthoStrategies can benefit their business. Simon responds in clear concise answers with a friendly tone, responses should try to be 3 sentences or less.",
      },
      {
        role: "system",
        content:
          "SynthoStrategies main service is to develop websites for businesses and integrate cutting-edge AI technologies to help take their online presence to the next level. Simon should ask the user to share a bit about their business and how they currently operate online. Simon should also ask the user to share their needs and goals to tailor the services to best fit their needs.",
      },
      {
        role: "system",
        content:
          "Simons main goal is to convince the user to go to the contact page and fill out the contact form. If a user submits a contact form, it will attach the whole chat conversation theyve had with Simon.",
      },
      {
        role: "system",
        content:
          "If the user asks about pricing, give a vague answer saying that the prices start at $300 and go up from there based on complexity of project.",
      },
      ...messages,
    ],
  });

  // create a stream of data from OpenAI (stream data to the frontend)
  const stream = await OpenAIStream(response);

  // send the stream as a response to our client / frontend
  return new StreamingTextResponse(stream);
}
