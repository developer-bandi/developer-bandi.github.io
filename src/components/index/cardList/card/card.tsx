import * as React from "react"
import * as styles from "./card.module.css"
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from "gatsby-plugin-image"
import { CardInfo } from "../type"

type Props = CardInfo

const Card = ({ thumbnail, category, title, description, date }: Props) => {
  const translatedThumbnail = getImage(thumbnail)

  return (
    <article className={styles.container}>
      <GatsbyImage
        image={translatedThumbnail as IGatsbyImageData}
        alt="thumbnail"
        className={styles.thumbnail}
      />
      <div className={styles.textContent}>
        <div className={styles.category}>{category}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.date}>{date}</div>
      </div>
    </article>
  )
}

export default Card
