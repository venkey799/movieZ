import React from 'react'
import './Navbar.css'
import Fire from '../../assets/images/fire.jpeg'
import Star from '../../assets/images/glowingstar.png'
import Party from '../../assets/images/partying-face.jpeg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Moviez</h1>
        <div className='navbar_links'>
            <Link to="/">Popular <img src={Fire} alt ="fire emoji" className='navbar_emoji'/></Link>
            <Link to="/top_rated"> Top rated <img src={Star} alt ="star emoji" className='navbar_emoji'/></Link>
            <Link to="/upcoming">Upcoming <img src={Party} alt ="party emoji" className='navbar_emoji'/></Link>

        </div>
    </nav>
  )
}

export default Navbar