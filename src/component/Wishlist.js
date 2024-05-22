import axios from 'axios';
import './Wishlist.css'
import React, { useEffect, useState } from 'react'
import Header from './Header';
import Footer from './Footer';


function Wishlist() {
   const[Wish,setWish]=useState([])
   const Studentid=localStorage.getItem('studentid')
   const wishlisted=()=>{
    axios.post(`http://localhost:3000/wbooklist2/${Studentid}`,Wish)
   .then((res)=>{
    console.log("wish",res);
    setWish(res.data.data)
   })
   .catch((err)=>{
    console.log(err);
   })


   }
   useEffect(()=>{
    wishlisted()
   },[])

  return (
    <body>
      <Header/>
       <div class="main">
         <div class="headingtitle">
         My  Wishlist
        </div>
  
       {Wish.map((value, index) => (
        
       <div class="cardsbook">
        <div class="imagebook">
        <img src={`http://localhost:3000/${value.bookid.image.filename}`}/>

        
        <div class="tittle">
          <h1>{value.bookid.title}</h1>

         

        
        <div class="desbooking">
        <p>{value.bookid.description}</p>
       
       </div>
       </div>
        </div>

      </div> 
  
     
  ))}

  </div>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <Footer/>
    </body>
  )
}

  
  

export default Wishlist