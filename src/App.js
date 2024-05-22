
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'react-bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'react-bootstrap-icons/font/bootstrap-icons.css';


import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Staff_Addbook from './component/Staff_Addbook';

import Staff_login from './component/Staff_login';
import Student_login from './component/Student_login';
import Student_reg from './component/Student_reg';
import Studentviewbook from './component/Studentviewbook';
import Details from './component/Details';

import Stdhome from './component/Stdhome';
import Staff_register from './component/Staff_register';
import Wishlist from './component/Wishlist';

import Book_hire from './component/Book_hire';

import About from './component/About';
import Staffhome from './component/Staffhome';
import Header from './component/Header';
import Feedback from './component/Feedback';
import Request from './component/Request';
import Bookhiring from './component/Bookhiring';
import Footer from './component/Footer';
import Headermain from './component/Headermain';
import Staffheader from './component/Staffheader';
import Footermain from './component/Footermain';
import Booklist from './component/Booklist';
import Feedbackview from './component/Feedbackview';
import Staffer from './component/Staffer';


function App() {
  return(
    <div>

      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Headermain/>}/>
         <Route path='/stdregister' element={<Student_reg/>}/>
         <Route path='/stfregister' element={<Staff_register/>}/>
         <Route path='/view' element={<Studentviewbook/>}/>
         <Route path='/details/:id' element={<Details/>}/> 
         <Route path='/home' element={<Stdhome/>}/>
         <Route path='/student' element={<Student_login/>}/>
         
         <Route path='/staff' element={<Staff_login/>}/>
         <Route path='/wishlist' element={<Wishlist/>}/>
       
         <Route path='/hirebooks' element={<Book_hire/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path="/hirebook" element={<Book_hire/>}/>
         <Route path='/booksadd' element={<Staff_Addbook/>}/>
         <Route path='/wish' element={<Wishlist/>}/>
         <Route path='/homep' element={<Staffhome/>}/>
         <Route path='/bookhire' element={<Bookhiring/>}/>
         <Route path='/requestpage' element={<Request/>}/>
        <Route path='/footer' element={<Footer/>}/> 
        <Route path='feedback' element={<Feedback/>}/>
        <Route path='/homehome'element={<Headermain/>}/>
        <Route path='/books' element={<Booklist/>}/>
        <Route path='/feedbackview' element={<Feedbackview/>}/>
      

       

      </Routes>
      
      
      
      
      </BrowserRouter> 


    </div>
  )
    

  
}

export default App





     
      
    
       

{/* <Routes> */}


   {/* <Route path='/' element={<Homepage/>}/>
   

{/*    
  // <Route path='/staff' element={<Staff_login/>}/>
  // <Route path="/student" element={<Student_login/>}/>
  //  <Route path="/studentregister" element={<Student_reg/>}/>
  //  <Route path="/staffregister" element={<Staff_register/>}/>
  <Route path="/details" element={<Studentviewbook/>}/> 
   <Route path='/feedback' element={<Feedback/>}/>  */}
{/*   
  <Route path='/details' element={<Studentviewbook/>}/> */}

     {/* </Routes>
 
 </div>
 </BrowserRouter> */}


  
        

        



  





