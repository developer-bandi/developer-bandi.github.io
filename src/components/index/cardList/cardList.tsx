import * as React from "react"

import Card from "./card/card"
import { CardInfo } from "./type"
import * as styles from "./cardList.module.css"

type Props = {
  list: CardInfo[]
}

const CardList = ({ list }: Props) => {
  return (
    <section className={styles.container}>
      {list.map(info => (
        <Card {...info} key={info.title} />
      ))}
    </section>
  )
}

export default CardList
