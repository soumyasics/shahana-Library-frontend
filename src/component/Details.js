import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './Details.css'
import Footer from './Footer';
import Header from './Header';

      function Details() {
      const id=useParams()
      const [data,setData]=useState({
      image:{filename:''},
  })
      const[borrow,setBorrow]=useState({
      bookid:id,
      Studentid:localStorage.getItem('studentid'),
      Date: new Date()
      
  })
      const borrowbook=(bookid)=>{
      console.log("data",borrow);
      borrow.bookid=bookid
      borrow.Studentid=localStorage.getItem('studentid')
      borrow.Date=new Date()
      axios.post("http://localhost:3000/bbook",borrow)
      .then((res)=>{
      setBorrow(res)
      console.log(res);
      if(res.data.status==200){

      
        alert("send Request to staff")
      }
      
    
      else
      {
        alert("book not borrowed")
      }
}  )
     }
        const [wishlist,setWishlist]=useState({
        bookid:id,
        Studentid:localStorage.getItem('studentid'),
        Date:new Date()

     })
        const wishlistbook=(bookid)=>{
        console.log("data",wishlist);
        wishlist.bookid=bookid
        wishlist.Studentid=localStorage.getItem('studentid')
        wishlist.Date=new Date().toISOString().split('T')[0]
        axios.post("http://localhost:3000/wbook",wishlist)
        .then(res=>{
            setWishlist(res)
            console.log(res);
            if(res.data.status===200){
                alert("Book wishlist added")
            }
            else{
                alert("book wishlist not added")
            }

        })}
              const bookdata=()=>{
              axios.get(`http://localhost:3000/viewbook/${
              id.id}`)
              .then((res)=>{
                console.log(res);

                setData(res.data.data)
      


      })
      }

      useEffect(()=>{
       

      bookdata()


      },[] );
             
       return (
        <div>
          <Header/>
                 <div class="bgpic">   
                 <div class="cards">
                 <div class="services">
                 <div class="content content-1">
                 <div class="bookheading"></div>
                 <img src={`http://localhost:3000/${data.image.filename}`}/>
                 <h1>
                 {data.title}
                 </h1>
                 <h2>
                 {data.author}</h2>
                 <p>
                 {data.isbn}</p>
                 <p>
                 {data.description}
                 </p>

                 <button type='btn3' onClick={()=>borrowbook(data._id)}>Borrow Book</button>
                 <button type='btn3' onClick={()=>wishlistbook(data._id)}>Wishlist Book</button>
                 </div>
                 </div>
                 </div>
                 </div>
               <Footer/>
                 </div>
        )
      }
        export default Details ;  
 