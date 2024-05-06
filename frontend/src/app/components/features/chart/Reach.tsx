import Link from "next/link";
import Image from "next/image";
import styles from "./styles/reach.module.scss";
import { ReferencesButton } from "../../elements/button/Button";

interface ReachData{
  reachData:{
    name: string
  }
}

export default function Reach({reachData}: ReachData) {
  return (
    <div className={styles.container}>
      <div className={styles.reach}>
        <h3 className={styles.reach_title}>
          Goal
          <span className={styles.reach_name}>
            {reachData.name}
          </span>
        </h3>
        <Link className={styles.edit_link} href='/' >
          <div className={styles.edit_link_inner}>
            <Image src='/create.svg' fill sizes="100%" alt="create" />
          </div>
        </Link>
      </div>
      <ReferencesButton />
    </div>
  )
}