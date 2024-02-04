import * as React from "react"
import GiscusApp from "@giscus/react"

import * as styles from "./giscus.module.css"

export default function Giscus() {
  return (
    <div className={styles.container}>
      <GiscusApp
        repo="developer-bandi/developer-bandi.github.io"
        repoId="R_kgDOKZu-Pg"
        category="Announcements"
        categoryId="DIC_kwDOKZu-Ps4CZz3Z"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="ko"
        loading="lazy"
      />
    </div>
  )
}
