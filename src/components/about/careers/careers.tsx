import * as React from "react"

import * as styles from "./careers.module.css"

const Careers = () => {
  return (
    <section>
      <h2 className={styles.title}>이력</h2>
      <ul className={styles.listWrap}>
        <li>
          <div className={styles.listHeader}>
            <h3>테크타카</h3>
            <p>2023. 06 ~ 현재</p>
          </div>
          <p>WMS, Fullfilment, TMS등 물류 도메인을 가진 회사입니다.</p>
          <ul className={styles.listContents}>
            <li>WMS, Fullfilment, admin 페이지 신규 기능 개발 및 유지보수</li>
            <li>
              WMS 다국어 적용시 상수화, 키추출, 배포를 쉽게할수 있도록{" "}
              <a
                href="https://blog.techtaka.com/%EC%9E%90%EB%8F%99%ED%99%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A0%9C%EA%B3%B5%ED%95%98%EA%B8%B0-02948a3fb295"
                className={styles.link}
              >
                자동화 스크립트를 개발
              </a>
              하여 번역에 걸리는 시간 단축
            </li>
            <li>
              아이콘 피그마 플러그인, 자동화 스크립트, 아이콘 라이브러리를
              제작하여 복잡한 아이콘 사용방식 개선
            </li>
            <li>
              서버 데이터 모킹을 위해 msw를 사용하고, 이를 좀더유연하게 사용하기
              위해 msw-gui를 개발하여 팀내 생산성 향상
            </li>
            <li>
              디자인 시스템내 정의되어있는 피그마 컴포넌트를 코드로 바로 옮기기
              위해 피그마 devmode plugin을 활용하여 피그마 컴포넌트를 코드로
              변환하는 스크립트를 개발
            </li>
            <li>
              여러 레포간에 공통적으로 사용되는 라이브러리를 관리하기 위해
              github package를 이용한 모노레포를 구성하고 테스트코드와 버저닝을
              통해 안정성 보장.
            </li>
            <li>디자인 시스템 개발 및 유지보수</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Careers
