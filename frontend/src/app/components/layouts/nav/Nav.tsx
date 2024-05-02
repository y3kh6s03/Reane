import React from 'react';

import Link from "next/link";
import Image from "next/image";

import { signOut } from '@/auth';
import styles from "./nav.module.scss"

interface Props {
  props: string
}

export default function MobileNav({ props }: Props) {
  const navItems = [
    { id: 1, name: 'home' },
    { id: 2, name: 'create' },
    { id: 3, name: 'mypage' },
    { id: 4, name: 'search' },
    { id: 5, name: 'setting' },
  ];

  const logout = async () => {
    "use server"

    await signOut();
  }
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        {
          navItems.map(item =>
            <li key={item.id} className={styles.nav_li}>
              <Link href={`/${item.name}`} className={styles.nav_li_link}>
                <div className={styles.image_container}>
                  <Image
                    className={styles.image_container_img}
                    src={item.name !== 'mypage' ? `${item.name}.svg` : props} fill sizes='100%' alt={`${item.name}`}
                  />
                </div>
                <span className={styles.name}>
                  {item.name === 'mypage'
                    ? 'My Page'
                    : item.name.charAt(0).toUpperCase() + item.name.slice(1)
                  }
                </span>
              </Link>
            </li>
          )
        }
        <li>
          <form
            className={styles.form}
            action={logout}>
            <button
              className={styles.form_button}
              type='submit'>
              Logout
            </button>
          </form>
        </li>
      </ul>
    </nav>
  )
}