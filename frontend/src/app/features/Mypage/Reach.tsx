import Link from "next/link";
import Image from "next/image";
import styles from "./styles/reach.module.scss";

export default function Reach() {
  return (
    <div className={styles.container}>
      <div className={styles.reach}>
        <h3 className={styles.reach_title}>
          Goal
          <span className={styles.reach_name}>
            ベンチプレス300kg
          </span>
        </h3>
        <Link className={styles.edit_link} href='/' >
          <div className={styles.edit_link_inner}>
            <Image src='create.svg' fill sizes="100%" alt="create" />
          </div>
        </Link>
      </div>
      <Link className={styles.review_link} href='/'>
        振り返り
        <div className={styles.review_link_inner}>
          <Image src='arrow.svg' fill sizes="100%" alt="arrow" />
        </div>
      </Link>
    </div>
  )
}