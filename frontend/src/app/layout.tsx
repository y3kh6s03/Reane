import { Metadata } from "next";

import { auth } from "@/auth";
import { accFont, jpFont, enFont } from "./styles/fonts";
import Nav from "./components/layouts/nav/Nav";

import "./styles/globals.scss";
import Header from "./components/layouts/header/Header";
import SideBar from "./components/layouts/sidebar/SideBar";
import ChartProvider from "./components/libs/ChartProvider";

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
        <main>
          {authImage &&
            <>
              <Header />
              <Nav props={authImage} />
              <SideBar />
            </>
          }
          <ChartProvider>
            {children}
          </ChartProvider>
        </main>
      </body>
    </html>
  );
}
