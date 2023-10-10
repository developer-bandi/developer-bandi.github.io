import { ImageDataLike } from "gatsby-plugin-image"

export type CardInfo = {
  thumbnail: ImageDataLike
  category: string
  title: string
  description: string
  date: string
  slug: string
}
