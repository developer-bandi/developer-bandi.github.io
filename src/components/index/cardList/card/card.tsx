import * as React from "react"
import * as styles from "./card.module.css"
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
  getImage,
} from "gatsby-plugin-image"
import { CardInfo } from "../type"
import { Link } from "gatsby"

type Props = CardInfo

const Card = ({
  thumbnail,
  category,
  title,
  description,
  date,
  slug,
}: Props) => {
  const translatedThumbnail = getImage(thumbnail)

  return (
    <article>
      <Link to={`/post${slug}`} className={styles.container}>
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
      </Link>
    </article>
  )
}

export default Card
