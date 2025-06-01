import * as React from "react"

import * as styles from "./project.module.css"

const Project = () => {
  return (
    <section>
      <h2 className={styles.title}>개인프로젝트</h2>
      <ul className={styles.listWrap}>
        <li>
          <div className={styles.listHeader}>
            <h3>codemod-kit</h3>
            <p>2025. 06 ~ 현재</p>
          </div>
          <ul className={styles.listContents}>
            <li>WMS, Fullfilment 페이지 프론트엔드 개발</li>
            <li>
              WMS 다국어 적용시 상수화, 키추출, 배포를 쉽게할수 있도록 자동화
              스크립트를 개발하여 번역에 걸리는 시간 단축
            </li>
            <li>
              아이콘 피그마 플러그인, 자동화 스크립트, 아이콘 라이브러리를
              제작하여 복잡한 아이콘 사용방식 개선
            </li>
            <li>
              멀티레포로 구성된 페이지를 모노레포로 구성하여 관심사의 집중
            </li>
            <li>
              팀내 컨벤션 정리후 필요한 경우 custom rule까지 활용하여 컨벤션
              관리 자동화
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Project
