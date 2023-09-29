import * as React from "react"

import Seo from "../components/seo"
import Page from "../components/index/page"
import { graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"

type Props = {
  data: ContentListQuery
}

const IndexPage = ({ data }: Props) => {
  return <Page data={data} />
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query contentListQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
          category
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export type ContentListQuery = {
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        category: string
        date: string
        description: string
        thumbnail: ImageDataLike
      }
    }[]
  }
}
