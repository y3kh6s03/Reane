import Image from "next/image"
import styles from "./Button.module.scss"

type ButtonName = {
  buttonName: 'like' | 'favorite'
}

export default function Button({buttonName}: ButtonName) {
  return (
    <button className={styles.likeButton} type="button">
      <div className={styles.icon_container}>
        <Image src={`/${buttonName}.svg`} fill sizes="100%" alt={`${buttonName}`} />
      </div>
    </button>
  )
}


// 編集ページにリンクするボタンをここで作成してコンポーネントかしていこう
// Reachからコードを取得してくる