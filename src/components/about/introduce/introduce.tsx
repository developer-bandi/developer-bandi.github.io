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
          <li>
            3년차 프론트엔드 개발자로, 물류 도메인에서 WMS/FULLFILLMENT/ADMIN를
            개발 해왔습니다.{" "}
          </li>
          <li>
            개발자 경험에 관심이 많습니다. 다국어 자동화 스크립트, MSW-Devtools
            등의 개발자들이 보다 쉽게 개발할수있도록 도와주는 도구를 만든 경험이
            있습니다.{" "}
          </li>
          <li>
            기술의 동작 원리에 관심이 많아 오픈소스 라이브러리를 분석하는것을
            좋아합니다. redux, react-hook-form, react-router, react-query를
            분석하고 이를 블로그에 작성하였습니다.{" "}
          </li>
          <li>
            오픈소스 기여에 관심이 많습니다. 최근에는 AST와 관련된 프로젝트인
            typescript-eslint에 주로 기여하고 있습니다{" "}
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  )
}

export default Introduce
