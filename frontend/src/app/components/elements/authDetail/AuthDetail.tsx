import Image from "next/image";
import styles from "./AuthDetail.module.scss"

interface AuthData {
  authData: {
    authName: string,
    authImage: string,
  }
}

export default function AuthDetail({ authData }: AuthData) {
  // DB取得データに変更
  const days = 224;
  return (
    <div className={styles.auth}>
      <div className={styles.auth_icon_container}>
        <Image src={authData.authImage} fill sizes="100%" alt="icon" />
      </div>
      <div className={styles.auth_details}>
        <span className={styles.auth_details_name}>
          {/* {authData.authName} */}
        </span>
        <span className={styles.auth_details_days}>
          Days: {days}
        </span>
      </div>
    </div>
  )
}