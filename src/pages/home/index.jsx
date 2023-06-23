import React from 'react'
import Banner from '../../components/Banner'
import Benefit from '../../components/Benefit'
// import Loading from '../../components/Loading'
import Navbar from '../../components/Navbar'
import Roadmap from '../../components/Roadmap'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Roadmap />
      <Benefit />
    </>
  )
}

export default Home
