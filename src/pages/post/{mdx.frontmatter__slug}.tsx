import * as React from "react"
import Seo from "../../components/seo"
import Header from "../../components/common/header/header"
import Footer from "../../components/common/footer/footer"
import { graphql } from "gatsby"

const BlogPost = ({ data, children }: any) => {
  console.log(data, children)
  return (
    <>
      <Header />
      <p>{data.mdx.frontmatter.date}</p>
      {children}
      <Footer />
    </>
  )
}

export const Head = ({ data }: any) => (
  <Seo title={data.mdx.frontmatter.title} />
)

export default BlogPost

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
