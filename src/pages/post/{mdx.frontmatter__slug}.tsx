import * as React from "react"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import { ImageDataLike } from "gatsby-plugin-image"
import Page from "../../components/post/page"

type Props = {
  data: ContentQuery
  children: React.ReactElement
}

const BlogPost = ({ data, children }: Props) => {
  return <Page data={data} content={children} />
}

export const Head = ({ data }: any) => {
  console.log(data)
  return (
    <Seo
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.description}
      thumbnail={
        data.mdx.frontmatter.thumbnail?.childImageSharp.gatsbyImageData.images
          .fallback.src
      }
      url={`/post${data.mdx.frontmatter.slug}`}
    />
  )
}

export default BlogPost

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        description
        category
        estimation
        slug
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export type ContentQuery = {
  mdx: {
    frontmatter: {
      title: string
      category: string
      date: string
      description: string
      estimation: string
      thumbnail: ImageDataLike
    }
  }
}
