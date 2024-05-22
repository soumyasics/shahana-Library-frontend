import React, { useState } from 'react'
import './Staff_Addbook.css';
import axios from 'axios';
import Footer from './Footer';
import Staffheader from './Staffheader';




   function Staff_Addbook() {

    const [AddBook, setAddBook] = useState({ title: "", author: "", isbn: "", description: "", image: null });
    
   const showBook = (a) => {

    if(a.target.name==='image'){

      setAddBook({...AddBook,image:a.target.files[0]})
    }
    else{

    setAddBook({ ...AddBook, [a.target.name]: a.target.value })
    }

    
 };
 
  const BookAdded = () => {
    if ((AddBook.title, AddBook.author, AddBook.isbn, AddBook.description, AddBook.image)) {

      console.log("data ",AddBook);

      axios.post("http://localhost:3000/Addbook", AddBook,{
        headers: {
        "Content-Type": "multipart/form-data",
      }})
           .then((a)=>{

        if(a.data.status===200){

          alert("Add Book Success")   
      }
      else{

        alert("Add book failed")
        }

       })

      .catch((error)=>{

        setAddBook(error);
      }
    );
  }
  else{
    alert("not enter all fields")

  }
    };
  return (
    <div>
      <Staffheader/>

    <div class="section2">


      <div className="addingbook" style={{ width: "35% " }}>
     

        <h2 className="addbook">Add Book</h2>


        <form action='#' >

        <div className="form-group4">

<label for="title">Title:</label>
<input
  type='text'
   className='form-control'
    id="title" 
    name='title'
     placeholder='Enter title Name' 
     onChange={showBook} required />
</div>
          
          <div className="form-group4">

            <label for="studentId">Author:</label>
            <input
              type='text'
               className='form-control'
                id="studentId" 
                name='author'
                 placeholder='Enter Author Name' 
                 onChange={showBook} required />
          </div>
          <div className="form-group4">

            <label for="contact">ISBN:</label>

            <input
              type="number"
               className="form-control"
                id="contact" 
                name="isbn"
                 placeholder='Enter ISBN Number'
                  onChange={showBook} required />

          </div>
          <div className="form-group4">

            <label for='area'>Description:</label>

            <textarea className="form-control" 
            name="description" 
            id='area' 
            cols="52" 
            rows="5"
             placeholder='Enter Description'
              onChange={showBook}>

                

            </textarea>
          </div>
            <div className="form-group4">

            <label for='file'>image:</label>

            <input type='file'
             className="form-control" 
             name='image'
              id='file'
               onChange={showBook} required />

          </div>

          <button type="button" className='addbtn btn btn-success' onClick={BookAdded}>ADD</button>
 </form>

      </div>
                    

    </div>
     <Footer/>
    </div>
  );
}



export default Staff_Addbook