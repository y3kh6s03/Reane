import { Metadata } from "next";
import { accFont, jpFont, enFont } from "./styles/fonts";

import Nav from "./components/layouts/Nav";

import "./styles/global.css";

export const metadata: Metadata = {
  title: {
    template: '%s | REINA',
    default: 'REINA'
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${accFont.variable} ${jpFont.variable} ${enFont.variable}`}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
