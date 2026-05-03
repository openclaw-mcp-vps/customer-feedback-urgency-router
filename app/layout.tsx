import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackRouter — Route feedback by urgency and sentiment",
  description: "AI analyzes customer feedback from multiple channels and routes urgent/negative feedback to appropriate teams with SLA tracking."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="865a6e41-d30c-4cd6-ad6b-aeb4a2695683"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
