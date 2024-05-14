"use client"

import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useAppSellector } from "@/store/hooks";
import SkillName from "./SkillName";
import styles from "./styles/SkillAndAction.module.scss";
import Actions from "./Actions";

export default function SkillAndActionIndex() {
  const authChartData = useAppSellector((state) => state.authChart.authChartData);
  const userChartData = useAppSellector((state) => state.usersChart.userChartData);
  const { data: session } = useSession();
  const authData = session?.user?.name;
  const pathName = usePathname();
  const createrName = decodeURIComponent(pathName.substring(1)).split('/')[1];
  const SkillAndActioinData = authData === createrName ? authChartData : userChartData;

  // ユーザー情報表示コンポーネント用props取得処理
  const userData = {
    userName: SkillAndActioinData.userName,
    userImage: SkillAndActioinData.userImage,
  }

  // スキルネームコンポーネント用props取得処理
  // アクション一覧コンポーネント用props取得処理
  const skillName = decodeURIComponent(pathName.substring(1)).split('/')[2];
  const skillsRowData = SkillAndActioinData.skills;
  const skillDatas = skillsRowData.find(skill => Object.keys(skill)[0] === skillName);
  const actionData = skillDatas && skillDatas[skillName];

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
        actionData
          ? <Actions {...actionData} />
          : <Actions {...[]} />
      }

    </div>
  )
}