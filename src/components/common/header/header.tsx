import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./header.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link to="/" className={styles.title}>
          <StaticImage
            src="../../../images/logo-big.png"
            loading="eager"
            width={30}
            formats={["auto", "webp", "avif"]}
            alt="logo"
            className={styles.logo}
          />
          개발자 반디
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}>
              About(WIP)
              {/* <Link to="/about" className={styles.navItem}>
                About
              </Link> */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
