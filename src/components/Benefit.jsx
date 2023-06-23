import React from 'react'
import title from '../assets/images/title.png'
import benefit1 from '../assets/images/benefit1.png'
import benefit2 from '../assets/images/benefit2.png'

const Benefit = () => {
  return (
    <div id="whitepaper" className="benefit">
      <div className="benefit-title">
        <img src={title} alt="title" />
      </div>
      <div className="benefit-container">
        <img src={benefit1} alt="benefit" />
        <div className="benefit-image">
          <img src={benefit2} alt="benefit" />
        </div>
        <div className="benefit-item --first">
          <h6>Daily USDT reward</h6>
          <p>
            We convert 1.5% of the 3% Buy Tax into $USDT, which is distributed
            among holders every 24 hours. Besides, 20% of revenue generated from
            our Multi-AI app Service will be returned to the community
          </p>
        </div>
        <div className="benefit-item --second">
          <h6>Free unlimited access to our app</h6>
          <p>
            $CPEPE Holders can use CPEPE Multi-AI App without paying
            subscription fee to create incredible arts and voices, which can be
            shared globally, helping you build a loyal following
          </p>
        </div>
        <div className="benefit-item --third">
          <h6>Play to earn</h6>
          <p>
            $CPEPE Holders can use LCEO NFT AI generator for free to create
            their own characters. They can use those characters to participate
            in battles and win valuable rewards
          </p>
        </div>
        <div className="benefit-item --fourth">
          <h6>Mint NFT</h6>
          <p>
            $CPEPE Holders can also get benefits from the full ownership of all
            NFTs they create, whether they are intended for personal or
            commercial use
          </p>
        </div>
      </div>
    </div>
  )
}

export default Benefit
