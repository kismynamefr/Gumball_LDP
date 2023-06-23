import React, { useEffect } from 'react'
import rainbow from '../assets/images/banner1.png'

const Loading = () => {
  useEffect(() => {
    const bar = document.querySelector('.bar')

    setTimeout(() => {
      bar.style.setProperty('--progress', '100%')
    }, 500)
  })
  return (
    <div className="loading">
      <div className="loading-container">
        <img src={rainbow} alt="rainbow" />
        <div class="progress">
          <div class="bar"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
