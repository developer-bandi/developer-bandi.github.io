import * as React from "react"

import * as styles from "./careers.module.css"

const Careers = () => {
  return (
    <section>
      <h2 className={styles.title}>이력</h2>
      <ul className={styles.listWrap}>
        <li>
          <div  className={styles.listHeader}>          
            <h3>테크타카</h3>
            <p>2023. 06 ~ 현재</p>
          </div>
          <ul className={styles.listContents}>
            <li>WMS, Fullfilment 페이지 프론트엔드 개발</li>
            <li>웹페이지 국제화 적용시 상수화를 쉽게 할수 있도록 스크립트를 개발하여 번역에 걸리는 시간 단축</li>
            <li>아이콘 피그마 플러그인, 자동화 스크립트, 아이콘 라이브러리를 제작하여 복잡한 아이콘 사용방식 개선</li>
            <li>멀티레포로 구성된 페이지를 모노레포로 구성하여 관심사의 집중</li>
            <li>팀내 컨벤션 정리후 필요한 경우 custom rule까지 활용하여 컨벤션 관리 자동화</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Careers
