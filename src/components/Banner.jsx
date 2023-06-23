import React from 'react'
import bg1 from '../assets/images/bg-banner1.png'
import bg2 from '../assets/images/bg-banner2.png'
import item1 from '../assets/images/banner1.png'
import item2 from '../assets/images/banner2.png'
import item3 from '../assets/images/banner3.png'
import item4 from '../assets/images/banner4.png'
import item5 from '../assets/images/banner5.png'
import item6 from '../assets/images/banner6.png'
import item7 from '../assets/images/banner7.png'
import item8 from '../assets/images/banner8.png'
import item9 from '../assets/images/banner9.png'
import item10 from '../assets/images/banner10.png'
import item11 from '../assets/images/banner11.png'
import item12 from '../assets/images/banner12.png'

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-bg">
        <img src={bg2} alt="background" />
        <div className="banner-image">
          <img src={item4} alt="item" />
          <div className="banner-image-right">
            <img src={item1} alt="item" className="rainbow" />
            <img src={item2} alt="item" />
          </div>
        </div>
        <img src={item3} alt="item" className="refrigerator" />
      </div>
      <div className="banner-bg --bg-house">
        <img src={bg1} alt="background" />
        <div className="banner-image">
          <img src={item6} alt="item" className="text" />
          <img src={item5} alt="item" />
        </div>
      </div>
      <div className="banner-footer">
        <div className="banner-footer__top">
          <img src={item7} alt="item" className="paper --top" />
          <img src={item8} alt="item" className="paper" />
          <div className="image">
            <img src={item11} alt="item" />
            <img src={item9} alt="item" className="chervon" />
          </div>
          <p>
            Just like Gumball's endless adventures, $GUMBALL offers a thrilling
            and dynamic digital currency experience. With its vibrant and
            whimsical design, $GUMBALL combines the power of blockchain
            technology with the imaginative spirit of the beloved cartoon. Get
            ready to embark on a virtual journey where $GUMBALL brings a touch
            of Gumball's excitement and wonder to the realm of ERC20 crypto.
          </p>
        </div>
        <div className="banner-footer__bottom">
          <img src={item12} alt="item" />
          <ul>
            <li>Presale - 20%</li>
            <li>Liquidity - 9.996%</li>
            <li>Unlocked - 0.4%</li>
            <li>Burnt - 69.604%</li>
          </ul>
          <img src={item10} alt="item" className="attention" />
        </div>
      </div>
    </div>
  )
}

export default Banner
