import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loading from '../components/Loading'
import EndlessSound from '../assets/imonmyway.mp3'
import ReactHowler from 'react-howler'

const DashboardLayout = ({ props }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isCompleted, setIsCompleted] = useState(false)

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
      disable: window.innerWidth < 768,
      once: true,
    })
    return () => AOS.refresh()
  }, [])

  useEffect(() => {
    handleLoading()
  }, [])

  return isLoading ? (
    <Loading setIsLoading={setIsLoading} isCompleted={isCompleted} />
  ) : (
    <>
      <ReactHowler src={EndlessSound} playing={true} />
      <div className="app">{props}</div>
    </>
  )
}

export default DashboardLayout
