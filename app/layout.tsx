import { Footer } from "@components/Footer";
import "@styles/globals.css";
import type { Metadata } from "next";
import Header from "@components/Header";

export const metadata: Metadata = {
  title: "Knewsly - For the latest happenings",
  description: "Knewsly is a site that provides recent news on sports, business and technology"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
