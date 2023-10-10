import * as React from "react"
import MuiPagination from "@mui/material/Pagination"

import * as styles from "./pagination.module.css"

type props = {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

const Pagination = ({ count, page, onChange }: props) => {
  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={onChange}
      className={styles.container}
    />
  )
}

export default Pagination
