import React from 'react'
import rainbow from '../assets/images/banner1.png'
import btn from '../assets/images/button.png'

const Loading = ({ isCompleted, setIsLoading }) => {
  return (
    <div className="loading">
      <div className="loading-container">
        <img src={rainbow} alt="rainbow" />
        <div className="progress">
          <div className="bar"></div>
        </div>
        <div
          className={`loading-button ${isCompleted ? 'fade-in-anima' : ''}`}
          onClick={() => setIsLoading(false)}
        >
          <img src={btn} alt="button" />
        </div>
      </div>
    </div>
  )
}

export default Loading
