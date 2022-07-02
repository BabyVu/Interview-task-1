import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Testimonial from "../components/Testimonial"
import Integration from "../components/Integration"
import * as styles from "../styles/home.module.css"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Layout>
      <Testimonial></Testimonial>
      <Integration></Integration>
      <div className={styles.banner}>
        <div className={styles.content}>
          <div>
            <div className={styles.text}>
              <b>Boost your team productivity using Clockwork.</b>
            </div>
            <Link className={styles.btn} to="/about">
              <img src="slack.png" alt="" /> Add to <b>Slack</b>
            </Link>
          </div>
          <div className={styles.picture}>
            <img src="ili.svg" alt="" />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  )
}
