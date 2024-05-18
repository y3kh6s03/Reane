"use client"

import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import SkillName from "./SkillName";
import styles from "./styles/SkillAndAction.module.scss";
import Actions from "./Actions";

export default function SkillAndActionIndex() {
  const { authChartDatas } = useAppSelector((state) => state.authChart);
  const userChartData = useAppSelector((state) => state.usersChart.userChartData);
  const { data: session } = useSession();
  const authData = session?.user?.name;
  const pathName = usePathname();
  const createrName = decodeURIComponent(pathName.substring(1)).split('/')[1];
  const SkillAndActioinData = authData === createrName ? authChartDatas : userChartData;
  console.log(authChartDatas)
  console.log(userChartData)

  // ユーザー情報表示コンポーネント用props取得処理
  const userData = {
    // userName: SkillAndActioinData.,
    userImage: SkillAndActioinData.userImage,
  }

  // スキルネームコンポーネント用props取得処理
  // アクション一覧コンポーネント用props取得処理
  const skillName = decodeURIComponent(pathName.substring(1)).split('/')[2];
  const skillDatas = SkillAndActioinData.skills;
  const actionDatas = skillDatas[skillName];
  // const actionData = skillDatas && skillDatas[skillName];

  return (
    <div className={styles.container}>
      <h1 className={styles.page_title}>
        Skill and Action
      </h1>
      {session
        ? <AuthDetail userData={userData} />
        : ''
      }
      <SkillName skillName={skillName} />
      {
        actionDatas
          ? <Actions {...actionDatas} />
          : <Actions {...[]} />
      }

    </div>
  )
}