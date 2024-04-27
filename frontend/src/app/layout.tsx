import { Metadata } from "next";

import { auth } from "@/auth";
import { accFont, jpFont, enFont } from "./styles/fonts";
import Nav from "./components/layouts/nav/Nav";

import "./styles/globals.scss";

export const metadata: Metadata = {
  title: {
    template: '%s | REINA',
    default: 'REINA'
  },
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  const authImage = session?.user?.image;
  return (
    <html lang='ja'>
      <body className={`${accFont.variable} ${jpFont.variable} ${enFont.variable}`}>
        {authImage && <Nav props={authImage} />}
        {children}
        <h1>aoewifjawoij</h1>

      </body>
    </html>
  );
}
