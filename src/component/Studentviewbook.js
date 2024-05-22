import React, { useEffect, useState } from 'react'
import './Studentviewbook.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'




function Studentviewbook() {



   const[data,setdata]=useState([])

    
   const View=()=>{


 
    axios.get("http://localhost:3000/view")
   

   .then((res)=>{

    setdata(res.data.data)
  
    console.log(res);

   })

   .catch((error)=>{

    setdata(error)


   })

  }  

 useEffect(()=>{

    View()

  },[])




return(
   <div>
    <Header/>
     <body>
     
      
          
       <section class="products11">
           <h1>BOOKS</h1>
           <div class="all-products11">
           {data.map((value, index) => (
               <div class="product11">
                 <img src={`http://localhost:3000/${value.image.filename}`}/>
                   <div class="product-info11">
                       <h4 class="product-title11">{value.title}</h4>
                       <p class="productdes11">{value.description}</p>
                      <Link to={`/details/${value._id }`}><button>VIEW</button></Link>
      

                       </div>

                   </div>
                      ))}
               </div>

               
        
               </section>
   
     
   
       </body> 
     
       <nav/>
    

    
       <Footer/>
       
</div>
)



}

         export default Studentviewbook  ;