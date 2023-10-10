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
          <li>이제 막 개발자로써 발을 내딛은 1년차 개발자입니다.</li>
          <li>
            기술의 동작 원리에 관심이 많아 오픈소스 라이브러리를 분석하는것을
            좋아합니다.
          </li>
          <li>
            개발뿐만 아니라 커뮤니케이션, 문서화등 개발 외적으로도 강점이 있는
            개발자로 성장하고자 합니다.
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  )
}

export default Introduce
