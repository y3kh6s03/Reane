"use client"

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import styles from "./styles/reach.module.scss";
import { JournalButton } from "../../components/elements/button/Button";
import AuthDetail from "../../components/elements/authDetail/AuthDetail";

interface ReachData {
  reachData: {
    name: string
    userName: string
    userImage: string
  }
}

export default function Reach({ reachData }: ReachData) {
  const { data: session } = useSession();
  const authName = session?.user?.name
  const userData = {
    userName: reachData.userName,
    userImage: reachData.userImage
  }
  return (
    <div className={styles.container}>
      <div className={styles.reach}>
        <h3 className={styles.reach_title}>
          REACH
          <span className={styles.reach_name}>
            {reachData.name}
          </span>
        </h3>
        {
          reachData.userName === authName
            ? <Link className={styles.edit_link} href='/edit/1' >
              <div className={styles.edit_link_inner}>
                <Image src='/create.svg' fill sizes="100%" alt="create" />
              </div>
            </Link>
            : ""
        }
      </div>
      {
        reachData.userName === authName
          ? <JournalButton journal={reachData.name}/>
          : <div className={styles.authDetail_container}>
            <AuthDetail userData={userData} />
          </div>
      }

    </div>
  )
}