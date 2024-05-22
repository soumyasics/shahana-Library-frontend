import React from 'react'
import './Staffheader.css'
import { Link } from 'react-router-dom'

function Staffheader() {
  return (
    <div>
         <div class="hhheader">
        <header>
            <div class="logo">
                <h2>LibrArY</h2>

            </div>
            <nav>
                <ul>
                  <Link to='/homehome'><li><a href='#'>HOME</a></li></Link>  
               <Link to='/books'><li> <a href='#'>BOOKS</a></li></Link>
               <Link to='/feedbackview'><li><a href='#'>FEEDBACKS</a></li></Link> 
                    <li><a href='#'></a></li>
                      <Link to='/requestpage'> <li><a href='#'>HIRE DETAILS</a></li></Link> 
                  <Link to='/about'> <li><a href='#'>ABOUT</a></li></Link> 
                </ul>
            </nav>
        </header>
      


    </div>

    </div>
  )
}

export default Staffheader