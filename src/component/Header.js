import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header>
            <div class="logo">
                <h2>LibrArY</h2>

            </div>
            <nav>
                <ul>
                   <Link  to='/homehome'><li><a href='#'>HOME</a></li></Link> 
                  <Link to='/feedback'><li><a href='#'>FEEDBACK</a></li></Link>  
                   <Link to='/wishlist'><li><a href='#'>WISHLISTS</a></li></Link> 
                  <Link to='/about'> <li><a href='#'>ABOUT</a></li></Link> 
                </ul>
            </nav>
        </header>
      


    </div>
  )
}

export default Header