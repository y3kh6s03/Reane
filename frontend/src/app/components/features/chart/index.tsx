import { auth } from "@/auth"
import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";

import styles from "./styles/mypage.module.scss"
import Reach from "./Reach";
import Chart from "../../elements/chart/Chart";
import ProgressMeter from "./ProgressMeter";
import ChartDisp from "./ChartDisp";

export default async function ChartIndex() {
  const session = await auth();
  const authData = {
    name: session?.user?.name || "",
    image: session?.user?.image || ""
  }
  return (
    <div className={styles.container}>
      {
        authData &&
        <div className={styles.authDetail_container}>
          <AuthDetail authData={authData} />
        </div>
      }
      <Reach />
      <div className={styles.skills_wrapper}>
        <Chart />
        <ProgressMeter />
        <ChartDisp />
      </div>
    </div>
  )
}