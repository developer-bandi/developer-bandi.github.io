import * as React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import IconButton from "@mui/material/IconButton"
import { Tooltip } from "@mui/material"

import * as styles from "./footer.module.css"
import Contact from "../contact/contact"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Contact />
      <div>© 2023. 김상두 all right reserved.</div>
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        className={styles.source}
      >
        Built with Gatsby
      </a>
    </footer>
  )
}

export default Footer
