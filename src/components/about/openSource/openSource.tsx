import * as React from "react"
import * as styles from "./openSource.module.css"
import data from "./constant"
const OpenSource = () => {
//   const [list,setList] = React.useState({})
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
    

//     const a = data.items.reduce((prev,{repository_url,title,pull_request:{url}})=>{
//       const element = {
//         title,
//         url
//       }

//       if(prev[repository_url] !== undefined){
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


  return (
    <section className={styles.container}>
      <h2 className={styles.title}>오픈소스 컨트리뷰트</h2>
      <p>아직 걸음마 단계이지만 관심있는 오픈소스, 특히 AST 관련 프로젝트에 주로 기여하고있습니다. 아래에서 프로젝트별로 기여한 pr을 확인하실수 있으며 제목을 누르면 실제 pr을 확인해 보실수 있습니다.</p>
      <ul className={styles.repositoryListWrap}>
        {Object.entries(data).sort((a,b)=>b[1].length-a[1].length).map(([key,value])=>{
          const repoName = key.split("/")[key.split("/").length-1]

          return (
<li className={styles.repositoryItem}>
          <h3 className={styles.repositoryTitle}>{repoName}</h3>
          <ul className={styles.contributeListWrap}>
            {value.map(({title,url})=>{
            return (<li className={styles.contributeItem}>
            <a href={url}>
              {title}
            </a>
          </li>)
            })}
          </ul>
        </li>
          )

        })}
      </ul>
    </section>
  )
}

export default OpenSource
