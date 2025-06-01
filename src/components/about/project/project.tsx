import * as React from "react"

import * as styles from "./project.module.css"

const Project = () => {
  return (
    <section>
      <h2 className={styles.title}>개인프로젝트</h2>
      <ul className={styles.listWrap}>
        <li>
          <div className={styles.listHeader}>
            <h3>
              <a href="https://github.com/developer-bandi/codemod-kit">codemod-kit</a>
            </h3>
            <p>2025. 04 ~ 현재</p>
          </div>
          <ul className={styles.listContents}>
            <li>자주 사용하는 codemod를 쉽게 사용할 수 있도록 도와주는 라이브러리입니다.</li>
            <li>
              jscodeshift를 기반으로 설계하였고 몇가지 옵션을 받아 cli나 programatic방법으로 사용할 수 있도록 하였습니다.
            </li>
            <li>
              import문, 컴포넌트 props, 함수 paramter와 관련된 리팩토링을 지원합니다.
            </li>
            <li>
              <a href="https://codemod-kit.netlify.app/">웹사이트</a>를 통해 문서 및 playground를 지원하여 쉽게 사용할 수 있도록 하였습니다.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Project
