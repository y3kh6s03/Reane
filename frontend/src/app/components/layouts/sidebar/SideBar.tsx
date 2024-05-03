import styles from "./sidebar.module.scss"

export default function SideBar() {
  return (
    <h3 className={styles.container}>サイドバー</h3>
    // ここには振り返りの一覧が表示されるようにしていくサイドバーのコンポーネントは呼び出す時にサイドバーというテキストを受け取った場合にサイドバーに表示するようのクラスが付与されてサイドバーに表示されるようになっていくよね
    // だから最初はシンプルに振り返りの一覧を表示するように作成すればOK
  )
}