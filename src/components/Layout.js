import React from "react"
import * as style from "../styles/global.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2022 | Developed by Qayamuddin</p>
      </footer>
    </div>
  )
}
