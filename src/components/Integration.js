import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/home.module.css"

export default function (Integration) {
  return (
    <div className={styles.integration}>
      <div className={styles.title}>
        <h1>Integrate with all of your favorite tools</h1>
        <p>
          Connect Clockwork amazing features with tools you're alreadt using
        </p>
      </div>
      <div className={styles.grid}>
        <div className={styles.logos}>
          <div className={styles.logo_content}>
            <img src="slack.png" alt="" />
            <p>Slack</p>
          </div>
          <div className={styles.logo_content}>
            <img src="jira.png" alt="" />
            <p>Jira</p>
          </div>
          <div className={styles.logo_content}>
            <img src="calender.png" alt="" />
            <p>Calender</p>
          </div>
          <div className={styles.logo_content}>
            <img src="docs.png" alt="" />
            <p>Docs</p>
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logo_content}>
            <img src="asana.png" alt="" />
            <p>Asana</p>
          </div>
          <div className={styles.logo_content}>
            <img src="trello.png" alt="" />
            <p>Trello</p>
          </div>
          <div className={styles.logo_content}>
            <img src="Notion.png" alt="" />
            <p>Notion</p>
          </div>
          <div className={styles.logo_content}>
            <img src="zapier.png" alt="" />
            <p>Zapier</p>
          </div>
        </div>
      </div>
      <Link className={styles.btn} to="/about">
        Learn more about Clockwork Integrtions
      </Link>
    </div>
  )
}
