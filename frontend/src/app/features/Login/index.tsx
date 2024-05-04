import React from "react"

import { redirect } from "next/navigation";
import { auth } from "@/auth"
import LoginForm from "./form"

export default async function LoginIndex() {
  const session = await auth();
  if (session?.user) {
    redirect('/mypage')
  }
  return (
    <LoginForm />
  )
}