/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title: string
  thumbnail?: string
  description?: string
  url?: string
  children?: React.ReactElement
}

function Seo({ title, thumbnail, description, url, children }: Props) {
  const { site, file } = useStaticQuery(
    graphql`
      query abc {
        site {
          siteMetadata {
            title
            description
            author
            keyword
            siteUrl
          }
        }
        file(base: { eq: "logo-big.png" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const metaAuthor = site.siteMetadata?.author
  const metaKeyword = site.siteMetadata?.keyword
  const metaSiteUrl = url
    ? site.siteMetadata?.siteUrl + url
    : site.siteMetadata?.siteUrl
  const metaThumbnail = thumbnail
    ? `${site.siteMetadata?.siteUrl}${thumbnail}`
    : `${site.siteMetadata?.siteUrl}${file.publicURL}`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={metaAuthor} />
      <meta name="keywords" content={metaKeyword} />
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaSiteUrl} />
      <meta property="og:image" content={metaThumbnail} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={metaAuthor} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaThumbnail} />
      {children}
    </>
  )
}

export default Seo
