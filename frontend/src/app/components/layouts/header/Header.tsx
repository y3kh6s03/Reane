import Logo from "../../elements/logo/Logo";
import Logout from "../../elements/logout/Logout";
import styles from "./header.module.scss"

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo size="sm" />
      <div className={styles.logout_container}>
        <Logout />
      </div>
    </div>
  )
}