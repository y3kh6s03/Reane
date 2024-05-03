import { auth } from "@/auth"
import AuthDisp from "./AuthDisp"
import Chart from "./Chart"
import Reach from "./Reach"

import styles from "./styles/mypage.module.scss"

export default async function MyPageIndex() {
  const session = await auth();
  const authData = {
    name: session?.user?.name || "",
    image: session?.user?.image || ""
  }
  return (
    <div className={styles.container}>
      {
        authData &&
        <AuthDisp authData={authData} />
      }
      <Reach />
      <Chart />
    </div>
  )
}