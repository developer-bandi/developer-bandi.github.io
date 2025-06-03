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
          <p>
            물류 도메인(FULLFILLMENT/WMS) 개발/유지보수 및 개발 생산성 도구를
            개발했습니다.
          </p>
          <ul className={styles.listContents}>
            <li>
              파트너 센터 개발을 위한 모노레포 도입
              <ul>
                <li>
                  화주를 관리하는 대행사가 접근가능한 파트너센터 개발을 위해
                  중복되는 코드인 풀필먼트 화면을 없애고자 모노레포 도입
                </li>
                <li>
                  container와 파트너 센터쪽 코드와 풀필먼트쪽 코드를 두고, 이를
                  container를 통해 배포되는 형식으로 구성
                </li>
                <li>
                  특정 app의 코드가 변경되었을때 특정 도메인이 변경되도록 gitlab
                  ci 코드 작성
                </li>
              </ul>
            </li>
            <li>
              다국어 자동화 스크립트 개발
              <ul>
                <li>
                  다국어 적용시 상수화, 키추출, 배포를 쉽게 적용할수 있는
                  스크립트를 개발하였습니다.
                </li>
                <li>
                  신규 기능 개발 또는 유지보수 작업시 스크립트를 이용하여 번역에
                  걸리는 시간을 단축하고 번역에 대한 정확성을 확보할수
                  있었습니다.
                </li>
                <li>
                  개발 과정과 결과를 정리하여{" "}
                  <a
                    href="https://blog.techtaka.com/%EC%9E%90%EB%8F%99%ED%99%94-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EB%8B%A4%EA%B5%AD%EC%96%B4-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%A0%9C%EA%B3%B5%ED%95%98%EA%B8%B0-02948a3fb295"
                    className={styles.link}
                  >
                    사내 블로그
                  </a>
                  에 기고하였습니다.
                </li>
              </ul>
            </li>
            <li>
              아이콘 피그마 플러그인 개발
              <ul>
                <li>
                  figma에서 생성한 아이콘을 github으로 배포하는 플러그인을
                  개발하였습니다.
                </li>
                <li>
                  디자이너가 새로운 아이콘을 추가하면 플러그인을 사용해
                  figma에서 생성한 아이콘이 github에 곧바로 적용되므로 아이콘
                  사용시 매번 svg파일을 추출하지 않아도 figma에서 생성한
                  아이콘을 사용할수 있게 되었습니다.
                </li>
                <li>
                  웹팀 뿐만 아니라 모바일 팀에서도 사용할수 있도록 개발되어 모든
                  프론트엔드 팀에서 디자이너와 아이콘 사용방식을 통일할 수
                  있었습니다.
                </li>
              </ul>
            </li>
            <li>
              MSW-Devtools 개발
              <ul>
                <li>
                  서버 데이터 모킹을 위해 msw를 적용하였지만 이를 좀더
                  생산적으로 사용하기 위해 MSW를 UI로 조작 할 수 있는 툴을
                  개발하였습니다.
                </li>
                <li>
                  정의된 모킹을 개발환경에서도 사용할수 있게되어 프론트 엔드
                  개발자 뿐만 아니라 디자이너, 기획자, 백엔드 개발자등이
                  시나리오를 테스트하기 용이해짐
                </li>
              </ul>
            </li>
            <li>
              피그마 컴포넌트 코드로 변환
              <ul>
                <li>
                  디자인 시스템내 정의되어있는 피그마 컴포넌트를 코드로 옮기기
                  위해 피그마 devmode plugin을 활용하여 피그마 컴포넌트를 코드로
                  변환하는 스크립트를 개발하여
                </li>
                <li>정확한 컴포넌트를 쉽게 구현할 수 있도록 했습니다.</li>
              </ul>
            </li>
            <li>
              라이브러리 관리
              <ul>
                <li>
                  기존에 submodule을 이용해 관리되던 공통 코드를 모노레포를
                  구성하고 github package를 이용해 배포하였습니다.
                </li>
                <li>테스트코드와 버저닝을 통해 안정성을 보장하였습니다.</li>
                <li>
                  docusaurus를 통한 문서화로 팀내 개발자들이 쉽게 사용할수
                  있도록 하였습니다.
                </li>
              </ul>
            </li>
            <li>
              디자인 시스템 관리
              <ul>
                <li>
                  사내 디자인 시스템이 명확하게 정의되어있지 않아 논의를 통해
                  이를 정의하고 shadcn ui를 기반으로 ui 컴포넌트를
                  제작하였습니다
                </li>
                <li>
                  기존에 사용하던 컴포넌트를 대체하기 위해 일괄 변환 스크립트를
                  작성하여 효율적이고 정확한 변환을 할 수 있었습니다.
                </li>
                <li>
                  구현된 결과물을 테스트 하기 위해 storybook과 playwrite를
                  이용한 회귀 테스트를 작성하였습니다.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  )
}

export default Careers
