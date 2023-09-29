import * as React from "react"

import Seo from "../components/seo"
import Header from "../components/common/header/header"
import Footer from "../components/common/footer/footer"

const NotFoundPage = () => (
  <>
    <Header />
    <h1>앗차!</h1>
    <p>잘못된 접근입니다.</p>
    <Footer />
  </>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
