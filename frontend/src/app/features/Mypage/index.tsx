import Chart from "./Chart"
import styles from "./mypage.module.scss"

export default function MyPageIndex() {
  return (
    <div className={styles.container}>
      <div>ユーザー情報</div>
      <div>目標情報</div>
      <Chart/>
    </div>
  )
}