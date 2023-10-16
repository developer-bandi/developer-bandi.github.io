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
    <div className={styles.container}>
      <MuiPagination count={count} page={page} onChange={onChange} />
    </div>
  )
}

export default Pagination
