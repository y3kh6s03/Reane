import React from 'react';

import Link from "next/link";
import Image from "next/image";

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
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_ul}>
        {
          navItems.map(item =>
            <li key={item.id} className={styles.nav_ul_item}>
              <Link href={item.name} className={styles.item_link}>
                <Image
                  className={styles.item_link_image}
                  src={item.name !== 'mypage' ? `${item.name}.svg` : props} fill sizes='100%' alt={`${item.name}`}
                />
                <span className={styles.item_link_name}>
                  {item.name}
                </span>
              </Link>
            </li>
          )
        }
      </ul>
    </nav>
  )
}