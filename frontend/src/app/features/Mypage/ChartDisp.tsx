import styles from "./styles/chartDisp.module.scss";

export default function ChartDisp(){
  return(
    <div className={styles.container}>
      <span className={styles.date}>since: 2024 / 01 / 01</span>
      <span className={styles.action_count}>action: 202 / 398</span>
    </div>
  )
}