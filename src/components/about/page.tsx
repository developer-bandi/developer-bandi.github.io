import * as React from "react"

import Header from "../common/header/header"
import Footer from "../common/footer/footer"
import * as styles from "./page.module.css"
import Introduce from "./introduce/introduce"
import Careers from "./careers/careers"

const Page = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Introduce />
        <Careers />
      </main>
      <Footer />
    </>
  )
}

export default Page
