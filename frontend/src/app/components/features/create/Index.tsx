"use client"

/* eslint-disable jsx-a11y/label-has-associated-control */

import { createPortal } from "react-dom";
import React, { useState } from "react";
import { useAppSellector } from "@/store/hooks";
import AuthDetail from "../../elements/authDetail/AuthDetail";

import styles from "./Create.module.scss";
import { AddSkillButton } from "../../elements/button/Button";
import SkillInputModal from "../../elements/Modal/SkillInputModal";
import Chart from "../../elements/chart/Chart";

const SkillInputModalContainer = ({ children }: { children: React.ReactNode }) => {
  const target = document.querySelector('#create');
  if (target) {
    return createPortal(children, target);
  }
  return "error"
}

interface UserData {
  userData: {
    userName: string,
    userImage: string,
  }
}

export default function CreateIndex({ userData }: UserData) {

  const { addSkills } = useAppSellector((state) => state.addSkills)
  const [isModal, setIsModal] = useState(false);
  const chartData = { skills: addSkills };

  return (
    <div className={styles.container} id="create">

      <h1 className={styles.title}>New Create</h1>

      <div className={styles.authDetail_container}>
        <AuthDetail userData={userData} />
      </div>

      <div className={styles.goalInput_container}>
        <label className={styles.goalInput_label} htmlFor="goalName">
          GOAL
        </label>
        <input className={styles.goalInput_input} id="goalName" name="goal_name" type="text" />
        <button
          className={styles.create_button}
          type="submit"
        >
          CREATE
        </button>
      </div>

      <div className={styles.chart_container}>
        <div className={styles.button_container}>
          <AddSkillButton setIsModal={setIsModal} />
        </div>
        <Chart chartData={chartData} />
      </div>

      {isModal &&
        <SkillInputModalContainer>
          <SkillInputModal setIsModal={setIsModal} />
        </SkillInputModalContainer>
      }

    </div>
  )
}