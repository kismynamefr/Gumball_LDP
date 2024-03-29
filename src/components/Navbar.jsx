import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import button from '../assets/images/button.png'
import twitter from '../assets/icons/twitter.svg'
import telegram from '../assets/icons/telegram.svg'
import menu from '../assets/icons/menu.svg'
import xmark from '../assets/icons/x.svg'

const listNav = [
  {
    name: 'About',
    link: '/',
  },
  {
    name: 'Tokenomics',
    link: '#tokenomics',
  },
  {
    name: 'Roadmap',
    link: '#roadmap',
  },
  {
    name: 'Whitepaper',
    link: '#whitepaper',
  },
]

const renderListNav = () => {
  return listNav.map((item, index) => {
    return (
      <a key={`${item}: ${index}`} href={item.link}>
        {item.name}
      </a>
    )
  })
}

function Modal({ shown, close }) {
  return shown ? (
    <div
      className="modal-backdrop"
      onClick={() => {
        close()
      }}
    >
      <div
        className={shown ? 'modal-content open' : 'modal-content close'}
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="x-icon" onClick={close}>
          <img src={xmark} alt="x-icon" />
        </div>
        <div className="modal-content-link">{renderListNav()}</div>
      </div>
    </div>
  ) : null
}

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div
          className="menu"
          onClick={() => {
            setOpen(!open)
          }}
        >
          <img src={menu} alt="menu" />
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-link">{renderListNav()}</div>
      <div className="navbar-right">
        <div className="navbar-right__social">
          <a
            href="https://t.me/gumballportal?fbclid=IwAR3Hw9vpMp8iO0BAGTRQ8rlQhGpJQs5AW4X2PxMIFIgowJB9cD8C_tvFqDM"
            target="_blank"
          >
            <img src={telegram} alt="telegram" />
          </a>
          <a
            href="https://twitter.com/GumballETH_/status/1671179691741544449?s=20&fbclid=IwAR2W7a73xSwaHLolGjXNPk8V4Vh2m7f9Bj2CO9Qrx0Ycvj6pJu9UGJbOnL8"
            target="_blank"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="navbar-right__button">
          <img src={button} alt="button" />
        </div>
      </div>
      <Modal
        shown={open}
        close={() => {
          setOpen(false)
        }}
      />
    </div>
  )
}

export default Navbar
