import * as React from "react"

import Header from "../common/header/header"
import Footer from "../common/footer/footer"
import Naviagtion from "../index/navigation/navigation"
import Pagination from "../index/pagination/pagination"
import CardList from "./cardList/cardList"

import * as styles from "./page.module.css"
import { ContentListQuery } from "../../pages"

type Props = {
  data: ContentListQuery
}

const Page = ({ data }: Props) => {
  const [category, setCategory] = React.useState("전체")
  const [page, setPage] = React.useState(1)

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
          list={["전체", "기술아티클", "토이시리즈", "회고"]}
          onChange={navigationChangeHandler}
        />
        <CardList
          list={data.allMdx.nodes.map(({ frontmatter }) => frontmatter)}
        />
        <Pagination count={10} page={page} onChange={paginationChangeHandler} />
      </main>
      <Footer />
    </>
  )
}

export default Page
