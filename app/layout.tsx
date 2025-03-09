import "./globals.css";
import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import NavBar from "./components/NavBar";
import { Roboto } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import './theme-config.css';

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Issue tracker app",
  description: "App for tracking issues.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <Theme accentColor="tomato" radius="large">
          <NavBar></NavBar>
          <main className="p-5">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
