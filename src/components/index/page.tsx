import * as React from "react"

import Header from "../common/header/header"
import Footer from "../common/footer/footer"
import Naviagtion from "../index/navigation/navigation"
import Pagination from "../index/pagination/pagination"
import CardList from "./cardList/cardList"
import { ContentListQuery } from "../../pages"
import { PAGE_UNIT } from "./constant"
import * as styles from "./page.module.css"

type Props = {
  data: ContentListQuery
}

const Page = ({ data }: Props) => {
  const [category, setCategory] = React.useState("전체")
  const [page, setPage] = React.useState(1)
  const [list, setList] = React.useState(
    data.allMdx.nodes.map(({ frontmatter }) => frontmatter)
  )

  /*** Effect ***/
  React.useEffect(() => {
    setList(
      data.allMdx.nodes
        .map(({ frontmatter }) => frontmatter)
        .filter(listInfo => {
          if (category === "전체") return true
          return listInfo.category === category
        })
        .filter((listInfo)=>{
          const disabledSlugs = ["/react-1","/react-2","/react-event","/explore-https","/how-work-browser","/hoisting"]
          return !disabledSlugs.includes(listInfo.slug)
        })
    )
  }, [category, page])

  /*** Event Handler ***/
  const navigationChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: string
  ) => {
    setCategory(value)
    setPage(1)
  }

  const paginationChangeHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Naviagtion
          list={["전체", "기술아티클", "회고"]}
          onChange={navigationChangeHandler}
        />
        {list.length === 0 ? (
          <div className={styles.empty}>아직 작성된 글이 없습니다</div>
        ) : (
          <>
            <CardList
              list={list.slice((page - 1) * PAGE_UNIT, page * PAGE_UNIT)}
            />
            <Pagination
              count={Math.ceil(list.length / PAGE_UNIT)}
              page={page}
              onChange={paginationChangeHandler}
            />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default Page
