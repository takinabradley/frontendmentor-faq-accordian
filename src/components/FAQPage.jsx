import H from "./H"
import styles from "./FAQPage.module.css"
import { useEffect, useRef } from "react";

export default function FAQPage({FAQs = [], headingLevelStart = 1, children}) {
  const ref = useRef(null)

  const onClick = e => {
    e.preventDefault();
    if (e.currentTarget.open) {
      e.currentTarget.removeAttribute('open')
    } else {
      [...e.currentTarget.parentElement.children].forEach(elem => elem.removeAttribute('open'))
      e.currentTarget.setAttribute('open', '')
    }
  }

  return (
    <div className={styles["FAQPage"]}>
      <H level={headingLevelStart} className={styles["heading"]}>FAQs</H>

      <div className="children">
        {children}
      </div>
      
      <div className={styles["faqs"]} ref={ref}>
        {FAQs.map((FAQ, index) => 
          <details key={FAQ.question} name='FAQ' className={styles["faq"]} onClick={onClick} open={index === 0 ? true : false}>
            <summary className={styles["faqQuestion"]}>
              <H level={headingLevelStart + 1} className={styles["faqQuestionHeading"]}>
                {FAQ.question}
              </H>
            </summary>

            <p className={styles["faqAnswer"]}>{FAQ.answer}</p>
          </details>
        )}
      </div>

    </div>
  )
}