import { auth } from "@/auth";
import AuthDetail from "../../elements/authDetail/AuthDetail"
import styles from "./sidebar.module.scss"

export default async function SideBar() {
  const session = await auth();
  const authData = {
    name: session?.user?.name || "",
    image: session?.user?.image || ""
  }
  return (
    <div className={styles.container}>
      <AuthDetail authData={authData}/>
    </div>
    // ここには振り返りの一覧が表示されるようにしていくサイドバーのコンポーネントは呼び出す時にサイドバーというテキストを受け取った場合にサイドバーに表示するようのクラスが付与されてサイドバーに表示されるようになっていくよね
    // だから最初はシンプルに振り返りの一覧を表示するように作成すればOK
  )
}