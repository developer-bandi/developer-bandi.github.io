import * as React from "react"

import Header from "../common/header/header"
import Footer from "../common/footer/footer"

import * as styles from "./page.module.css"
import { ContentQuery } from "../../pages/post/{mdx.frontmatter__slug}"
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image"
import Giscus from "./giscus/giscus"

type Props = {
  data: ContentQuery
  content: React.ReactElement
}

const Page = ({ data, content }: Props) => {
  const translatedThumbnail = getImage(data.mdx.frontmatter.thumbnail)

  React.useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    })
  }, [data])

  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.summaryWrap}>
          <GatsbyImage
            image={translatedThumbnail as IGatsbyImageData}
            alt="thumbnail"
            className={styles.thumbnail}
          />
          <div className={styles.infoWrap}>
            <div className={styles.category}>
              {data.mdx.frontmatter.category}
            </div>
            <div className={styles.title}>{data.mdx.frontmatter.title}</div>
            <div className={styles.descriprion}>
              {data.mdx.frontmatter.description}
            </div>
            <div className={styles.date}>{data.mdx.frontmatter.date}</div>
          </div>
        </section>
        <section className="markdown-body">{content}</section>
        <Giscus />
      </main>
      <Footer />
    </>
  )
}

export default Page
