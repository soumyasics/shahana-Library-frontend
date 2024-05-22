import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Book_hire.css';
import Footer from './Footer';
import Header from './Header';


function Book_hire() {
 
  const[Book,setBook]=useState([])
  const Studentid=localStorage.getItem('studentid')
  const hirebook=()=>{
      axios.post(`http://localhost:3000/bbooklist2/${Studentid}`,Book)
      .then((res) => {
          console.log("Book",res);
          setBook(res.data.data)
      })
      .catch((err) => {
          console.log(err);
      })
 }
  useEffect(()=>{
  hirebook()
  },[])
  return (
    <body>
      <Header/>
     
     
                

         <div class="main">
         <div class="headingtitle">
         MY HIRE BOOKS
        </div>
  
       {Book.map((value, index) => (
        
       <div class="cardsbook">
        <div class="imagebook">
        <img src={`http://localhost:3000/${value.bookid.image.filename }`}/>

        
        <div class="tittle">
          <h1>{value.bookid.title}</h1>

         

        
        <div class="desbooking">
        <p> {value.bookid.description}</p>
       </div>
       </div>
        </div>

      </div> 
    
     
  ))}
  </div>
  <br/><br/><br/><br/>
  <Footer/>
    </body>
  )
}

export default Book_hire