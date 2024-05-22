import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import './Headermain.css'

function Headermain() {
  return (
    
         <div class="headerpicture">
        <header2>
            <div class="logo">
                <h2> LibrArY</h2>

            </div>
            <nav>
                <ul>
                  
                  <Link to='/about'> <li><a href='#'>ABOUT</a></li></Link> 
                  <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        SIGN UP
                                    </a>
                                    <ul class="dropdown-menu bg-black" >
                                       <Link  to='/stfregister'> <li><a class="dropdown-item" href="#" >STAFF </a></li></Link>
                                        <Link to='/stdregister'><li><a class="dropdown-item" href="#" >STUDENT </a></li></Link>
                                        
                                    </ul>
                                </li>
                               
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        LOG IN
                                    </a>
                                    <ul class="dropdown-menu bg-black" >
                                      <Link to='/staff'> <li><a class="dropdown-item" href="#" >STAFF LOGIN</a></li></Link> 
                                     
                                        <Link to='/student'><li><a class="dropdown-item" href="#" >STUDENT LOGIN</a></li></Link>
                                        
                                    </ul>
                                </li>
                </ul>
            </nav>
            </header2>
         
       
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/>
        <br/>
        <Footer/>

    </div>
    
  )
}

export default Headermain