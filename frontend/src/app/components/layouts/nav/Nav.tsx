import Image from "next/image";
import Link from "next/link";

import styles from "./nav.module.scss"

interface Props {
  props: string
}

export default function MobileNav(props: Props) {
  const navItems = ['home', 'create', 'mypage', 'search', 'setting'];
  console.log(navItems)
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          {
            navItems.map((item, index) => {
              return (
                <li key={index} className={styles.nav_ul_item}>
                  <Link href={item} className={styles.item_link}>
                    <Image
                      className={styles.item_link_image}
                      src={item !== 'mypage' ? `${item}.svg` : props.props} fill sizes={'100%'} alt={`${item}`}
                    />
                    <span className={styles.item_link_name}>
                      {item}
                    </span>
                  </Link>
                </li>
              )
            }
            )}
        </ul>
      </nav>
    </>
  )
}