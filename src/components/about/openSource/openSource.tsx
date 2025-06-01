import * as React from "react"
import * as styles from "./openSource.module.css"
import data from "./constant"
const OpenSource = () => {
  const [list, setList] = React.useState({})
  //   React.useEffect(()=>{
  //     const username = "developer-bandi";  // GitHub 사용자 이름
  // const token = ""; // 발급받은 Personal Access Token

  // // GitHub API URL
  // const apiUrl = `https://api.github.com/search/issues?q=type:pr+author:${username}&per_page=100`;

  // fetch(apiUrl, {
  //   method: "GET",
  //   headers: {
  //     "Authorization": `token ${token}`,  // 인증 토큰 추가
  //     "Accept": "application/vnd.github.v3+json"  // GitHub API 버전 명시
  //   }
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //     return response.json();  // JSON 형태로 변환
  //   })
  //   .then(data => {
  //     const a = data.items.reduce((prev,{repository_url,title,html_url,pull_request})=>{
  //       const element = {
  //         title,
  //         url:html_url
  //       }

  //       if(prev[repository_url] !== undefined && pull_request?.merged_at){
  //         prev[repository_url].push(element)
  //       }

  //       return prev
  //     },{
  //       "https://api.github.com/repos/chaijs/chai":[],
  //       "https://api.github.com/repos/import-js/eslint-plugin-import":[],
  //       "https://api.github.com/repos/jsx-eslint/eslint-plugin-react":[],
  //       "https://api.github.com/repos/typescript-eslint/typescript-eslint":[],
  //       "https://api.github.com/repos/DefinitelyTyped/DefinitelyTyped":[],
  //       "https://api.github.com/repos/react-hook-form/react-hook-form":[]
  //     })

  //     console.log(JSON.stringify(a))
  //     setList(a)
  //   })
  //   .catch(error => {
  //     console.error("Error fetching data:", error);
  //   });

  //   },[])

  const code = [
    {
      title: "typescript-eslint",
      link: "https://github.com/typescript-eslint/typescript-eslint/pulls?page=1&q=is%3Apr+author%3Adeveloper-bandi",
      description: [
        "typescript를 지원하는 eslint 플러그인",
        "규칙 및 웹사이트에 대해 기능 추가 및 수정 작업을 하였습니다.",
        "33개의 pr로 기여하였습니다.",
      ],
    },
    {
      title: "eslint-plugin-react",
      link: "https://github.com/jsx-eslint/eslint-plugin-react/pulls?page=1&q=is%3Apr+author%3Adeveloper-bandi",
      description: [
        "react를 지원하는 eslint 플러그인",
        "규칙 옵션 추가 및 버그 수정하였습니다.",
        "6개의 pr기여"
      ],
    },
    {
      title: "react-hook-form",
      link: "https://github.com/react-hook-form/react-hook-form/pulls?page=1&q=is%3Apr+author%3Adeveloper-bandi",
      description: [
        "react hook으로 사용가능한 form",
        "버그 수정 및 테스트 코드 추가 작업",
        "4개의 pr기여"
      ],
    },
  ]

  //https://github.com/typescript-eslint/typescript-eslint/pulls?page=1&q=is%3Apr+author%3Adeveloper-bandi

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오픈소스 컨트리뷰트</h2>
      <ul className={styles.repositoryListWrap}>
        {
          code.map(({title,link,description})=>{
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
