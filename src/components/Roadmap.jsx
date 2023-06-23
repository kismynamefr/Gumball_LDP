import React, { useEffect } from 'react'
import item1 from '../assets/images/roadmap1.png'
import item2 from '../assets/images/roadmap2.png'
import item3 from '../assets/images/roadmap3.png'
import vector from '../assets/images/vector.png'
import phase1 from '../assets/images/phase1.png'
import phase2 from '../assets/images/phase2.png'
import phase3 from '../assets/images/phase3.png'
import phase4 from '../assets/images/phase4.png'
import gif from '../assets/images/gumball.gif'

const Roadmap = () => {
  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      document.querySelector('.rabbit').classList.add('animation')
    })
  })

  return (
    <div id="roadmap" className="roadmap">
      <div className="roadmap-grass">
        <img src={item1} alt="roadmap" />
        <img src={item2} alt="roadmap" className="rabbit" />
      </div>
      <div className="roadmap-image">
        <img src={item3} alt="roadmap" />
        <div className="roadmap-container">
          <div className="roadmap-content">
            <img src={vector} alt={vector} data-aos="fade-in" data-aos-duration="3000"/>
            <div className="item">
              <img src={phase1} alt="phase" />
            </div>
            <div className="item --second">
              <img src={phase2} alt="phase" />
            </div>
            <div className="item --third">
              <img src={phase3} alt="phase" />
            </div>
            <div className="item --fourth">
              <img src={phase4} alt="phase" />
            </div>
          </div>
        </div>
        <div className="roadmap-gif">
          <img src={gif} alt="roadmap" />
        </div>
      </div>
    </div>
  )
}

export default Roadmap
