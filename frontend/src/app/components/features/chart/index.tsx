import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import type { ChartState } from "@/store/chartSlice";
import styles from "./styles/mypage.module.scss"
import Reach from "./Reach";
import Chart from "../../elements/chart/Chart";
import ProgressMeter from "./ProgressMeter";
import ChartDisp from "./ChartDisp";

export default function ChartIndex({ chart }: ChartState) {

  const authData = {
    authName: chart.authName,
    authImage: chart.authImage
  }

  const reachData = {
    name: chart.reachName,
  }

  const chartData ={
    skills: chart.skills
  }

  const progressData ={
    actionCount: chart.actionCount,
    executedCount: chart.executedActionCount
  }

  const chartDispData = {
    createdAt: chart.createdAt,
    actionCount: chart.actionCount,
    executedCount: chart.executedActionCount
  }

  return (
    <div className={styles.container}>
      {
        authData &&
        <div className={styles.authDetail_container}>
          <AuthDetail authData={authData} />
        </div>
      }
      <Reach reachData={reachData}/>
      <div className={styles.skills_wrapper}>
        <Chart chartData={chartData}/>
        <ProgressMeter progressData={progressData}/>
        <ChartDisp chartDispData={chartDispData}/>
      </div>
    </div>
  )
}