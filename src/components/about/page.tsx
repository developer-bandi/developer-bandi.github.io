import * as React from "react"

import Header from "../common/header/header"
import Footer from "../common/footer/footer"
import * as styles from "./page.module.css"
import Introduce from "./introduce/introduce"
import Careers from "./careers/careers"
import OpenSource from "./openSource/openSource"
import Project from "./project/project"
const Page = () => {
  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    })
  }, [])

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Introduce />
        <Careers />
        <Project />
        <OpenSource />
      </main>
      <Footer />
    </>
  )
}

export default Page
