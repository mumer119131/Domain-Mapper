import React from 'react'
import './header.css'
import Hero from './hero/Hero'
const Header = () => {
  return (
    <header>
        <nav>
            <h2><i className="fa-sharp fa-solid fa-map"></i> Domain Mapper</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#" className='join' >Join</a></li>
            </ul>
        </nav>
        <Hero />
    </header>
  )
}

export default Header