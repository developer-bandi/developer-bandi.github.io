import * as React from "react"
import * as styles from "./openSource.module.css"
import data from "./constant"

const OpenSource = () => {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오픈소스 컨트리뷰트</h2>
      <ul className={styles.repositoryListWrap}>
        {
          data.map(({title,link,description})=>{
            return <li className={styles.repositoryItem} key={title}>
            <h3 className={styles.repositoryTitle}>
              <a href={link}>
                {title}
              </a>
            </h3>
            <ul className={styles.contributeListWrap}>
              {description.map((content) => {
                return (
                  <li className={styles.contributeItem} key={content}>
                    {content}
                  </li>
                )
              })}
            </ul>
          </li>
          })
        }
        
      </ul>
    </section>
  )
}

export default OpenSource
