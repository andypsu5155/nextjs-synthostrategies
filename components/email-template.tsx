import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h2>
      This email is from {name}, at {email}
    </h2>
    <h1>Message:</h1>
    <p>{message}</p>
  </div>
);
