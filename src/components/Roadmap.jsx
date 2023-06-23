import React from 'react'
import item1 from '../assets/images/roadmap1.png'
import item2 from '../assets/images/roadmap2.png'
import item3 from '../assets/images/roadmap3.png'
import vector from '../assets/images/vector.png'
import phase1 from '../assets/images/phase1.png'
import phase2 from '../assets/images/phase2.png'
import phase3 from '../assets/images/phase3.png'
import phase4 from '../assets/images/phase4.png'

const Roadmap = () => {
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
            <img src={vector} alt={vector} />
            {/* <div className="item">
              <h4>PHASE I</h4>
              <div className="circle"></div>
              <div className="item-content">
                <h4>Basic</h4>
                <p>Idea & Concept</p>
                <p>Website & Smart Contract</p>
              </div>
            </div>
            <div className="item --second">
              <div className="item-content">
                <h4>Preparing for FL</h4>
                <p>KYC by Pinksale</p>
                <p>Audit</p>
                <p>Ads for Fairlaunch</p>
                <p>Fairlaunch on Pinksale</p>
              </div>
              <div className="circle"></div>
              <h4>PHASE II</h4>
            </div>
            <div className="item --third">
              <h4>PHASE III</h4>
              <div className="circle"></div>
              <div className="item-content">
                <h4>Launch Side</h4>
                <p>Ads for Launch</p>
                <p>Launch on PCS</p>
                <p>Listing on CoinGecko</p>
                <p>Listing on CoinMarketCap</p>
              </div>
            </div>
            <div className="item --fourth">
              <div className="item-content">
                <h4>Utility Side</h4>
                <p>Minting NFTs</p>
                <p>Open Staking App</p>
              </div>
              <div className="circle"></div>
              <h4>PHASE IV</h4>
            </div> */}
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
      </div>
    </div>
  )
}

export default Roadmap
