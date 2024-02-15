import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LogoNavbar from "@/components/logo-navbar";
import { MessagesProvider } from "@/context/messages-context";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthoStrategies",
  description:
    "a dynamic and forward-thinking AI automation agency dedicated to driving success and innovation for businesses across diverse industries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-300 relative`}>
        <LogoNavbar />
        <main className="flex min-h-screen flex-col items-center">
          <MessagesProvider>{children}</MessagesProvider>
        </main>
        <Script
          id="voiceflow-script"
          strategy="afterInteractive" // Ensures the script is loaded after the page becomes interactive
          dangerouslySetInnerHTML={{
            __html: `
            (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '65cbe297bb47578acb29a5f9' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
            })(document, 'script');
          `,
          }}
        />
      </body>
    </html>
  );
}
