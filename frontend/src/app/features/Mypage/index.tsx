import Chart from "./Chart"
import Reach from "./Reach"
import styles from "./styles/mypage.module.scss"

export default function MyPageIndex() {
  return (
    <div className={styles.container}>
      <Reach />
      <Chart />
    </div>
  )
}