import React from "react";

import { auth, signIn, signOut } from "@/auth";

export default async function Auth() {
  const session = await auth();
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
      <h1>{session?.user?.name}</h1>
    </>
  )
}