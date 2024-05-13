"use client"

// import { useState } from "react";
import Button, { JournalButton } from "@/app/components/elements/button/Button";
import { ActionData } from "@/store/AuthChartsSlice";
import styles from "./styles/Action.module.scss";

type ActionProps = ActionData[]

export default function Actions(actions: ActionProps) {

  // const [inputActionName, setinputActionName] = useState('')

  const dammyFunction = async () => {
    console.log('test')
  }

  return (
    <div className={styles.container}>

      <h2 className={styles.action_title}>
        ACTION
      </h2>

      <div className={styles.skill_rate_container}>
        <span className={styles.skill_rate}>
          {/* 取得データに変更 */}
          25
          <span className={styles.skill_rate_parcent}>%</span>
        </span>
        <span className={styles.skill_count}>
          {/* 取得データに変更 */}
          1 / 5
        </span>
      </div>

      {
        Object.values(actions).map((action) => {
          const actionName = Object.keys(action)[0]
          return (
            <div key={actionName} className={styles.actions_container}>
              <form className={styles.checkbox} onChange={dammyFunction}>
                <input type="checkbox" />
              </form>
              <form className={styles.action_name} onBlur={dammyFunction}>
                <input
                  type="text"
                  placeholder="アクションを入力"
                  value={actionName}
                  // onChange={(e) => setinputActionName(e.target.value)}
                  onChange={()=>{}}
                />
              </form>
              <Button buttonName="delete" />
              <JournalButton />
            </div>
          )
        })
      }

    </div>
  )
}