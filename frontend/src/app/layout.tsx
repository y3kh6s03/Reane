import { Metadata } from "next";

import { auth } from "@/auth";
import { accFont, jpFont, enFont } from "./styles/fonts";
import Nav from "./components/layouts/nav/Nav";

import "./styles/globals.scss";
import Logo from "./components/elements/Logo/Logo";
import SideBar from "./components/layouts/sidebar/SideBar";

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
        {authImage &&
          <>
            <Logo size="header" />
            <Nav props={authImage} />
          </>
        }
        <main>
          {children}
        </main>
        <SideBar />
      </body>
    </html>
  );
}
