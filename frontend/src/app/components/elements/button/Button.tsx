import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react";
import styles from "./Button.module.scss"

type ButtonName = {
  buttonName: 'like' | 'favorite' | 'create' | 'delete';
}

type ModalToggleButtonProps = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export default function Button({ buttonName }: ButtonName) {
  return (
    <button className={styles.button} type="button">
      <div className={styles.icon_container}>
        <Image src={`/${buttonName}.svg`} fill sizes="100%" alt={`${buttonName}`} />
      </div>
    </button>
  )
}

export function JournalButton() {
  return (
    <Link className={styles.journal_link} href='/'>
      <div className={styles.title_container}>
        <span>
          振り返り
        </span>
      </div>
      <div className={styles.journal_link_inner}>
        <Image src='/arrow.svg' fill sizes="100%" alt="arrow" />
      </div>
    </Link>
  )
}

export function AddSkillButton({ setIsModal }: ModalToggleButtonProps) {
  const toggleModal = () => {
    setIsModal((prev: boolean) => !prev);
  }
  return (
    <button className={styles.addSkill} type="button" onClick={() => { toggleModal() }}>
      +
      <span>スキル追加</span>
    </button>
  )
}

// 編集ページにリンクするボタンをここで作成してコンポーネントかしていこう
// Reachからコードを取得してくる