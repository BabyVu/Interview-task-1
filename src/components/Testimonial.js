import React from "react"
import * as styles from "../styles/home.module.css"

export default function Testimonial() {
  return (
    <section className={styles.section1}>
      <div className={styles.title}>
        <h1>
          <b>What our users says </b>
        </h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.container}>
            <img src="quotation.png" alt="" />
            <h3>
              Clockwork has increased my team productivity and resulted in more
              collaborative meetings. My team loves capturing their own agenda
              items, taking meeting notes.
            </h3>
            <div className={styles.img_position}>
              <img src="pexels-denniz-futalan-3453083.jpg" alt="" />
              <h4>
                <b>Alex Ford</b>
              </h4>
              <p>CMO, Claro Money</p>
            </div>
          </div>
        </div>
        {/*card 2  */}
        <div className={styles.card}>
          <div className={styles.container}>
            <img src="quotation.png" alt="" />
            <h3>
              Before Clockwork, one-on-ones were a google document with a
              bulleted list per person. Now we have topics to discuss and the
              meeting is more productive using Clockwork.
            </h3>
            <div className={styles.img_position}>
              <img src="pexels-pixabay-220453.jpg" alt="" />
              <h4>
                <b>Paul Debhy</b>
              </h4>
              <p>CPO, Joyn</p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className={styles.card}>
          <div className={styles.container}>
            <img src="quotation.png" alt="" />
            <h3>
              When I lead meeting with Clockwork, the meeting go so much
              smoother. It helps me even become more proactive and set
              expectation for my team. I feel so much confident in every new
              meeting.
            </h3>
            <div className={styles.img_position}>
              <img src="pexels-pixabay-415829.jpg" alt="" />
              <h4>
                <b>Jeremy Sholzberg</b>
              </h4>
              <p>CRO, Arcadia.tv</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
