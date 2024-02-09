import OpenAI from "openai";

const openai = new OpenAI();

export default async function getOpenAIResponse(question: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: question },
    ],
    temperature: 0.8,
    max_tokens: 256,
    top_p: 1,
  });

  if (typeof response.choices[0].message.content === "string") {
    return response.choices[0].message.content;
  } else {
    return "Response is not a string.";
  }
}
