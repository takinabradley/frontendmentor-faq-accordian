import { useEffect, useState } from "react"
import FAQPage from "./components/FAQPage"
import styles from "./App.module.css"

// pretend we're getting the FAQs from some external source...
const FAQs = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  }, 
  {
    question: "Is Frontend Mentor free?",
    answer: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
  }
]

const getFAQs = async () => FAQs

function useFAQs() {
  const [FAQs, setFAQs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFAQs = async () => {
      const FAQs = await getFAQs()
      setFAQs(FAQs)
      setLoading(false)
    }

    fetchFAQs()
  }, [])

  return [FAQs, loading]
}

function App() {
  const [FAQs, loading] = useFAQs()
  
  return (
    <div className={styles["App"]}>
      <main className={styles["main"]}>
        <FAQPage FAQs={FAQs}>
          {loading ? "Loading..." : null}
        </FAQPage>
      </main>
      
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/takinabradley">takinabradley</a>.
      </div>
    </div>
  )
}

export default App
