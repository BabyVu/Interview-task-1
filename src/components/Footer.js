import React from "react"
import * as styles from "../styles/footer.css"

export default function footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <img src="zapier.png" alt="" />
            <ul>
              <li>
                <a href="#">
                  Run efficient meetings, stay on top of action items, <br />
                  automate your workflows.
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Meetings</a>
              </li>
              <li>
                <a href="#">Actions</a>
              </li>
              <li>
                <a href="#">Workflows</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Clockwork Newsletter</h4>
            <ul>
              <li>
                <p>Get the latest and productivity tips from Clockwork</p>
              </li>
              <li>
                <form action="">
                  <input
                    type="email"
                    maxlength="50"
                    required
                    placeholder="Enter your email address"
                  />
                  <button class="bt">Subscribe</button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
