import React from "react";

import { signIn, signOut } from "@/auth";

export default async function Auth() {
  return (
    <>
      <form action={async () => {

        "use server"

        await signIn("google");
      }}
      >
        <button type="submit">login</button>
      </form>
      <form action={async () => {

        "use server"

        await signOut();
      }}
      >
        <button type="submit">logout</button>
      </form>
    </>
  )
}