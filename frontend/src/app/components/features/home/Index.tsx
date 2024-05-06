import styles from "./styles/Home.module.scss"
import Tab from "./Tab";
import UserCard from "./UserCard";

export default function HomeIndex() {
  return (
    <div className={styles.home}>
      <Tab />
      <UserCard/>
      <UserCard/>
      <UserCard/>
      <UserCard/>
    </div>
  )
}