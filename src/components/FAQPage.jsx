import H from "./H"
import styles from "./FAQPage.module.css"

export default function FAQPage({FAQs = [], headingLevelStart = 1, children}) {
  return (
    <div className={styles["FAQPage"]}>
      <H level={headingLevelStart} className={styles["heading"]}>FAQs</H>

      <div className="children">
        {children}
      </div>
      
      <div className={styles["faqs"]}>
        {FAQs.map(FAQ => 
          <details key={FAQ.question} name='FAQ' className={styles["faq"]}>
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