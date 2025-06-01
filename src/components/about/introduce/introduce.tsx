import * as React from "react"

import * as styles from "./introduce.module.css"
import Contact from "../../common/contact/contact"

const Introduce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameLine}>
        안녕하세요 <br />
        프론트엔드 개발자 <strong>김상두</strong> 입니다
      </div>
      <div className={styles.introBox}>
        <ul>
          <li>프론트엔드 개발자로써 다양한 경험이 있습니다.</li>
          <li>문서화에 관심이 많습니다. 개발한 라이브러리나, 프로젝트를 문서로 정리하고 이를 공유하여 남기는것을 습관처럼 하고 있습니다.</li>
          <li>개발자 경험을 향상시키는게 관심이 많습니다. </li>
          <li>기술의 동작 원리에 관심이 많아 오픈소스 라이브러리를 분석하는것을 좋아합니다. redux, react-hook-form, react-router, react-query등을 분석해보았습니다. 또한 기여에도 관심이 많아 AST와 관련된 프로젝트인 typescript-eslint에 주로 기여하고 있습니다.</li>
        </ul>
      </div>
      <Contact />
    </div>
  )
}

export default Introduce
