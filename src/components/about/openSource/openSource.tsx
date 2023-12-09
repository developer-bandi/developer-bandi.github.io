import * as React from "react"
import * as styles from "./openSource.module.css"

const OpenSource = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오픈소스 컨트리뷰트</h2>
      <ul className={styles.repositoryListWrap}>
        <li className={styles.repositoryItem}>
          <h3 className={styles.repositoryTitle}>eslint-plugin-react</h3>
          <ul className={styles.contributeListWrap}>
            <li className={styles.contributeItem}>
              <a href="https://github.com/jsx-eslint/eslint-plugin-react/pull/3656">
                jsx-key 규칙 문서의 문법 오류 수정
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default OpenSource
