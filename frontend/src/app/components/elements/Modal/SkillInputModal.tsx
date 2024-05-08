import { Dispatch, SetStateAction, useState } from "react";
import { addSkill } from "@/store/AddSkillsSlice";
import { useAppDispatch } from "@/store/hooks";
import styles from "./Modal.module.scss";

type SkillInputModalProps = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export default function SkillInputModal({setIsModal }:SkillInputModalProps) {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const cancelHandler = () => {
    setIsModal(prev => !prev)
  }

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(text!==''){
      dispatch(addSkill(text));
    }
    cancelHandler();
  }

  return (
    <div
      className={styles.skillModal_wrapper}>
      <form className={styles.skillModal} onSubmit={formSubmitHandler}>
        <input
          className={styles.skillModal_input}
          type="text"
          placeholder={text === "" ? 'スキルを追加' : text}
          value={text}
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value)
          }} />
        <div className={styles.button_container}>
          <button
            className={styles.skillModal_cancel}
            type="button"
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button
            className={styles.skillModal_ok}
            type="submit"
          >
            OK
          </button>
        </div>
      </form>
    </div>
  )
}