import React, { useEffect, useState } from 'react'
import EndlessSound from '../assets/imonmyway.mp3'
import useHowlerProvider from '../hooks/useHowlerProvider'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../components/Loading'

const DashboardLayout = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)
  const useHowler = useHowlerProvider({
    type: 'play',
    soundFile: EndlessSound,
    volume: 0.5,
  })

  const handleLoading = async () => {
    const bar = document.querySelector('.bar')
    setTimeout(() => {
      bar.style.setProperty('--progress', '100%')
    }, 500)
    setTimeout(() => {
      setIsCompleted(true)
    }, 6000)
  }

  useEffect(() => {
    AOS.init({
      disable: function () {
        let maxWidth = 768
        return window.innerWidth <= maxWidth
      },
    })
    return () => AOS.refresh()
  }, [])

  useEffect(() => {
    handleLoading()
  }, [])

  return isLoading ? (
    <Loading setIsLoading={setIsLoading} isCompleted={isCompleted} />
  ) : (
    <div className="app">{props}</div>
  )
}

export default DashboardLayout
