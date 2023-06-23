import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Scss/main.scss'
import Banner from './components/Banner'
import Benefit from './components/Benefit'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import EndlessSound from './assets/imonmyway.mp3'
import useHowlerProvider from './hooks/useHowlerProvider'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = async () => {
    const bar = document.querySelector('.bar')
    await new Promise(resolve => setTimeout(resolve, 500));
    bar.style.setProperty('--progress', '100%')
    // await new Promise(resolve => setTimeout(resolve, 500));
    // setIsLoading(false)
  }

  useEffect(() => {
    AOS.init({
      disable: function () {
        let maxWidth = 768
        return window.innerWidth <= maxWidth
      },
    })
    AOS.refresh()
  }, [])

  useEffect(() => {
    handleLoading()
  }, [])

  useEffect(() => {
    useHowlerProvider({
      type: 'play',
      soundFile: EndlessSound,
      volume: 0.5,
    })
  })

  return isLoading ? <Loading /> : <div className="app">
    <Navbar />
    <Banner />
    <Roadmap />
    <Benefit />
  </div>
}

export default App
