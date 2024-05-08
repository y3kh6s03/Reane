"use client"

import { createPortal } from "react-dom";
import React, { useState } from "react";
import { useAppSellector } from "@/store/hooks";
import AuthDetail from "../../elements/authDetail/AuthDetail";
import styles from "./create.module.scss";
import { ModalToggleButton } from "../../elements/button/Button";
import SkillInputModal from "../../elements/Modal/SkillInputModal";

const TestModalContainer = ({ children }: { children: React.ReactNode }) => {
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
  // const [skills, setSkills] = useState<string[]>([]);
  const { addSkills } = useAppSellector((state) => state.addSkills)
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={styles.container} id="create">
      <h1>New Create</h1>
      <AuthDetail userData={userData} />
      <p>
        GOAL
      </p>
      <ModalToggleButton setIsModal={setIsModal} />
      {
        addSkills.map((skill) => <h3 key={skill}>{skill}</h3>)
      }
      {isModal &&
        <TestModalContainer>
          <SkillInputModal
            // setSkills={setSkills}
            setIsModal={setIsModal} />
        </TestModalContainer>
      }
    </div>
  )
}