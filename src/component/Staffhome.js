import React from 'react'
import './Staffhome.css'
import { Link } from 'react-router-dom'
import Staffheader from './Staffheader'
import Footer from './Footer'

function Staffhome() {
  return (
    <div>
      <Staffheader/>
         <div class="photo">
        <div class="banner6">
             
            <div class="navbar10">
               <ul>
       
          
       
             
              
              
             

               </ul>
              </div>
            <div class="content30">
                <h1>WELCOME  TO LIBRARY</h1>
                <p>“There is more treasure in books than in all the pirate's loot on Treasure Island.” ....<br></br>
“To learn to read is to light a fire; every syllable that is spelled out is a spark.” ...<br></br>
“I declare after all there is no enjoyment like reading! ...<br></br>
“Books are the mirrors of the soul.”</p>

    <Link to='/booksadd'><button>ADD BOOK</button></Link>
              
                
            
            
            
            <div>

              {/* <Link to='/view'><button type='button'><span></span>VIEW BOOKS</button></Link>   */}
               </div>
            </div>
        </div>
    </div>
   
    <Footer/>
    </div>
  )
}

export default Staffhome