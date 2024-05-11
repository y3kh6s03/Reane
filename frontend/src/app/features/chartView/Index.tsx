import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import { useSession } from "next-auth/react";
import styles from "./styles/ChartView.module.scss";
import Reach from "./Reach";

import ProgressMeter from "./ProgressMeter";
import ChartDisp from "./ChartDisp";
import Chart from "../../components/elements/chart/Chart";
import Button from "../../components/elements/button/Button";

interface ChartState {
  chartData: {
    id: number,
    userImage: string,
    userName: string,
    days: number,
    reachName: string,
    skills: { [key: string]: string[] },
    actionCount: number,
    executedActionCount: number,
    createdAt: string,
  }
}

export default function ChartIndex({ chartData }: ChartState) {
  const { data: session } = useSession();
  const authName = session?.user?.name;
  const userData = {
    userName: chartData.userName,
    userImage: chartData.userImage
  }

  const reachData = {
    name: chartData.reachName,
    userName: chartData.userName,
    userImage: chartData.userImage
  }

  const skillDatas = {
    skills: chartData.skills
  }

  const progressData = {
    actionCount: chartData.actionCount,
    executedCount: chartData.executedActionCount
  }

  const chartDispData = {
    createdAt: chartData.createdAt,
    actionCount: chartData.actionCount,
    executedCount: chartData.executedActionCount
  }

  return (
    <div className={styles.container}>
      <div className={styles.authDetail_container}>
        <AuthDetail userData={userData} />
      </div>
      <Reach reachData={reachData} />
      <div className={styles.skills_wrapper}>
        <Chart chartData={skillDatas} />
        <ProgressMeter progressData={progressData} />
        <ChartDisp chartDispData={chartDispData} />
      </div>
      {
        authName !== chartData.userName
          ? <div className={styles.icons_container}>
            <Button buttonName="like" />
            <Button buttonName="favorite" />
            <Button buttonName="create" />
          </div>
          : ''
      }
    </div>
  )
}