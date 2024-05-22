import React from 'react'
import './Stdhome.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


function Stdhome() {
      
  return (
    <div>
      <Header/>
    <div class="photo">
        <div class="banner6">
             
            <div class="navbar10">
       
              </div>
            <div class="content5">
                <h1>WELCOME TO LIBRARY</h1>
                <p>A library is a collection of books, and possibly other materials and media,<br></br>
                     that is accessible for use by its members and members of allied institutions<br></br>
                     Libraries provide the crucial role in promoting education, research,<br></br> personality development, ethics and other important values.<br></br>
                      A society cannot flourish without proper education and the primary <br></br>requirement of the education system is the knowledge available in the books.</p>
            
            <div>

              <Link to='/view'><button type='button'><span></span>VIEW BOOKS</button></Link>  
            <Link to='/hirebook'><button>HIRE BOOKS</button></Link>  
               </div>
            </div>
        </div>
    </div>
    
    <Footer/>
    </div>
  )
}

export default Stdhome