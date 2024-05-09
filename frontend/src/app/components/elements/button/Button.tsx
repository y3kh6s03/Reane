import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react";
import styles from "./Button.module.scss"

type ButtonName = {
  buttonName: 'like' | 'favorite' | 'create';
}

type ModalToggleButtonProps = {
  setIsModal: Dispatch<SetStateAction<boolean>>;
};

export default function Button({ buttonName }: ButtonName) {
  return (
    <button className={styles.likeButton} type="button">
      <div className={styles.icon_container}>
        <Image src={`/${buttonName}.svg`} fill sizes="100%" alt={`${buttonName}`} />
      </div>
    </button>
  )
}

export function ReferencesButton() {
  return (
    <Link className={styles.review_link} href='/'>
      振り返り
      <div className={styles.review_link_inner}>
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