import NextAuth, { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const config: NextAuthConfig = {
  providers: [Google],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/Authenticated") {
          return !!auth;
        }
        return true;
      } catch (e) {
        console.log("auth.tsコールバックエラー:" + e);
      }
    },
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth(config);