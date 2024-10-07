import React from 'react'
import './NavbarSection.css'

export default function NavbarSection() {
  return (
     <div className=''>
    <div className='navbar-container'>
          <div className='navbar-logo'><img src="/Images/LogoBytiUi.svg" /></div>
           <div className='navbar-left-part'>
          <div className='navbar-menu'>
            <ul className='navbar-ul'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>How it Works</a></li>
                <li><a href='#'>Services</a></li>
            </ul>
          </div>
          <div className='navbar-btn'>
            <button className='navbar-right-btn'>Sign in</button>
            <button className='navbar-left-btn'>sign up</button>
          </div>
          </div>
    </div>
     <div className='multi-color-pic'></div>
     <div className='middle-heading'>
            <div className='middle-heading-para'><p>Where Creativity Meets Strategy:<br/>
           <span> Crafting Your Vision, Every Step of the Way</span></p></div>
            <div className='middle-heading-btn'>
                <button>Get in Touch</button>
            </div>
        </div>
    </div>
  )
}
