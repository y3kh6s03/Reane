import Image from "next/image"
import Link from "next/link"
import styles from "./Button.module.scss"

type ButtonName = {
  buttonName: 'like' | 'favorite'
}

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


// 編集ページにリンクするボタンをここで作成してコンポーネントかしていこう
// Reachからコードを取得してくる