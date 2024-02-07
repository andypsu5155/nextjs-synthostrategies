import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";
import * as React from "react";
import { NextApiRequest } from "next";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    data: {
      name: string;
      email: string;
      message: string;
    };
  };
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: { json: () => any }) {
  try {
    const body = await request.json();
    const { name, email, message } = body.data;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["andypsu5155@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({
        name: name,
        email: email,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
