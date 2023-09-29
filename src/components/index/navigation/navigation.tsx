import * as React from "react"

import * as styles from "./navigation.module.css"

type props = {
  list: string[]
  onChange: (event: React.ChangeEvent<unknown>, value: string) => void
}

const Navigation = ({ list, onChange }: props) => {
  const [selected, setSelected] = React.useState(list[0])

  const navigationClickHandler = (
    event: React.ChangeEvent<unknown>,
    value: string
  ) => {
    setSelected(value)
    onChange(event, value)
  }

  return (
    <nav className={styles.container}>
      <ul className={styles.wrapper}>
        {list.map(value => {
          return (
            <li
              className={`${styles.content} ${
                value === selected ? styles.contentSelected : ""
              }`}
              onClick={e => navigationClickHandler(e, value)}
              key={value}
            >
              {value}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
