import { auth } from "@/auth";
import AuthDetail from "@/app/components/elements/authDetail/AuthDetail";
import Chart from "@/app/components/elements/chart/Chart";
import styles from "./styles/show.module.scss"
import Reach from "../chart/Reach";

export default async function ShowIndex() {
  const session = await auth();
  const authData = {
    name: session?.user?.name || "",
    image: session?.user?.image || ""
  }
  return (
    <div className={styles.container}>
      {
        authData &&
        <div className={styles.authDetail_container}>
          <AuthDetail authData={authData} />
        </div>
      }
      <Reach />
      <div className={styles.skills_wrapper}>
        <Chart />
      </div>
    </div>
  )
}