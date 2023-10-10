import * as React from "react"

import * as styles from "./careers.module.css"

const Careers = () => {
  return (
    <section>
      <h2 className={styles.title}>이력</h2>
      <ul className={styles.listWrap}>
        <li>
          <strong>테크타카</strong>
          <div> Frontend Engineer (2023. 06 ~ 현재)</div>
        </li>
      </ul>
    </section>
  )
}

export default Careers
