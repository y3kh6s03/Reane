import SkillAndActionIndex from "@/app/features/skillAndAction/Index";
import { SessionProvider } from "next-auth/react";

export default function SkillAndAction() {
  return (
    <SessionProvider>
      <SkillAndActionIndex />
    </SessionProvider>
  )
}