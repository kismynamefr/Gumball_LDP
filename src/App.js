import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Scss/main.scss'
import Banner from './components/Banner'
import Benefit from './components/Benefit'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {

  useEffect(() => {
    AOS.init({
      // disable: function () {
      //   let maxWidth = 768
      //   return window.innerWidth <= maxWidth
      // },
    })
    AOS.refresh()
  }, [])

  return (
    <div className="app">
      <Loading />
      <Navbar />
      <Banner />
      <Roadmap />
      <Benefit />
    </div>
  )
}

export default App
