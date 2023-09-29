import * as React from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import IconButton from "@mui/material/IconButton"
import { Tooltip } from "@mui/material"

import * as styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.contactList}>
        <li className={styles.contact}>
          <Tooltip title="GitHub" placement="top" arrow>
            <a href="https://github.com/puki4416" target="_blank">
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </Tooltip>
        </li>
        <li className={styles.contact}>
          <Tooltip title="LinkedIn" placement="top" arrow>
            <a
              href="https://www.linkedin.com/in/%EC%83%81%EB%91%90-%EA%B9%80-82a06b26b/"
              target="_blank"
            >
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
          </Tooltip>
        </li>
        <li className={styles.contact}>
          <Tooltip title="Email" placement="top" arrow>
            <a href="mailto:puki4416@gmail.com">
              <IconButton>
                <EmailIcon />
              </IconButton>
            </a>
          </Tooltip>
        </li>
      </ul>
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
