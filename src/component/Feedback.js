import React, { useState } from 'react'
import './Feedback.css';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

function Feedback() {
  const Data = { Firstname: "", Lastname: '', Gender: "", Email: "", Password: "", bookname:"", Comment: "" }

  const [inputData, setinputData] = useState(Data)
  function handleData(e) {
    setinputData({ ...inputData, [e.target.name]: e.target.value })
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!inputData.Firstname || !inputData.Lastname || !inputData.Gender || !inputData.Email || !inputData.Password || !inputData.bookname||!inputData.Comment) {
      alert("all fields are mandatory")
    }
    else {

      axios.post("http://localhost:3000/feedback_login", inputData)
        .then((a) => {
          console.log(a);
          alert(a.data.msg)
          localStorage.getItem("Studentsid",a.data.Data._id)
          console.log(a.data.Data._id);
        })
        .catch((err) => {
          console.log(err);
        }, [])

    }
    

  }
  return (

        <div>
          <Header/>
    <div className='form-page'>
      <form action='' onSubmit={handleSubmit}>

        <h1> Feedback Form</h1>
        <div className='input-box'>
          <p>First Name:<input type='text' onChange={handleData} name='Firstname' value={inputData.Firstname} ></input></p>
          <p>Last Name:<input type='text' onChange={handleData} name='Lastname' value={inputData.Lastname}></input></p>


        </div>
        <div className='gender'>
          <p><label><input type='radio' onChange={handleData} name='Gender' value='male'></input>Male</label>  </p>
          <p><label><input type='radio' onChange={handleData} name='Gender' value='female'></input>Female</label></p>

        </div>
        <div className='emailbox'>
          <p>Email:<input type='email' onChange={handleData} name='Email' value={inputData.Email}></input></p>
          <p>password:<input type='password' onChange={handleData} name='Password' value={inputData.Password}></input></p>
          <p>Book name:<input type='text'onChange={handleData} name='bookname' value={inputData.bookname}></input></p>
        </div>
        <div className='commentbox'>
          <p>Comment: <input type='text' onChange={handleData} name='Comment' value={inputData.Comment}></input></p>


        </div>
        <div className='button5'>
          <button type='submit'>Send Feedback</button>
          

        </div>




      </form>

    </div>
    <Footer/>
    </div>
  )
}

export default Feedback