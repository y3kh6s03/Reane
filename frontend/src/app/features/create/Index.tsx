"use client"

/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import { useAppSellector } from "@/store/hooks";
import { AddAction } from "@/store/CreateChartSlice";
import AuthDetail from "../../components/elements/authDetail/AuthDetail";

import styles from "./Create.module.scss";
import { ModalToggleButton } from "../../components/elements/button/Button";
import SkillInputModal from "../../components/elements/Modal/SkillInputModal";
import Chart from "../../components/elements/chart/Chart";
import SkillInputModalContainer from "../../components/utils/SkillInputModal";
import ActionInputModalContainer from "../../components/utils/ActionInputModal";
import ActionInputModal from "../../components/elements/Modal/ActionInputModal";

interface UserData {
  userData: {
    userName: string,
    userImage: string,
  }
}

export default function CreateIndex({ userData }: UserData) {

  const createChartStates = useAppSellector((state) => state.createChart)
  const [isSkillModal, setIsSkillModal] = useState(false);
  const [isActionModal, setIsActionModal] = useState(false);
  const [skillName, setSkillName] = useState('');
  const [addActions, setAddActions] = useState<AddAction[]>([]);
  const [inputAction, setInputAction] = useState<string>('');

  const chartData = {
    userName: userData.userName,
    skills: createChartStates.skills,
    setIsActionModal,
    setSkillName,
  };

  const actionData = {
    setIsActionModal,
    skillName,
    addActions,
    setAddActions,
    inputAction,
    setInputAction,
    addedActions: createChartStates.skills
  }

  const modalToggleProps = {
    setIsModal:setIsSkillModal,
    toggleName:'スキル'
  }

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
          <ModalToggleButton modalToggleProps={modalToggleProps} />
        </div>
        <Chart chartData={chartData} />
      </div>

      {isSkillModal &&
        <SkillInputModalContainer>
          <SkillInputModal setIsSkillModal={setIsSkillModal} />
        </SkillInputModalContainer>
      }

      {isActionModal &&
        <ActionInputModalContainer>
          <ActionInputModal actionData={actionData}
          />
        </ActionInputModalContainer>
      }

    </div>
  )
}