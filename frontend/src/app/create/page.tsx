import { auth } from "@/auth";
import CreateIndex from "../components/features/create/Index";

export default async function Create() {
  const session = await auth();
  const userData = {
    userName: session?.user?.name ?? '',
    userImage: session?.user?.image ?? ''
  }
  return (
    <CreateIndex userData={userData}/>
  )
}