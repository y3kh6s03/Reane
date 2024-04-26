import { Metadata } from "next";

import { accFont, jpFont, enFont } from "./styles/fonts";
import Nav from "./components/layouts/nav/Nav";

import "./styles/globals.scss";
import { auth } from "@/auth";

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
        <div className=''></div>
        <div className=''></div>
      </body>
    </html>
  );
}
