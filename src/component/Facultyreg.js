
import React, { useState } from 'react'

import './Faculty.css'

import axios from 'axios'


function Facultyreg() {

  const Data = { FacultyID: "", Firstname: "", Lastname: "", Gender:"", Email: "", password: "", phonenumber: "", address: "" }
  const [inputData, setinputData] = useState(Data)

  function handleData(e) {

    setinputData({ ...inputData, [e.target.name]: e.target.value })

    console.log(inputData);

  }

  function handleSubmit(e) {

    e.preventDefault()

    
     if (!inputData.FacultyID || !inputData.Firstname || !inputData.Lastname || !inputData.Gender || !inputData.Email || !inputData.password || !inputData.phonenumber || !inputData.address) {

      alert("All fields are Mandatory");
    }
    else {
      console.log("data",inputData);

console.log("ok");

      axios.post("http://localhost:3000/faculty_register", inputData)


        .then((a) => {

console.log(a);

    })
        .catch((err) => {

          console.log(err);


        }, [])

      
    alert("registration success")
      }
}
  return (

    <div class="wrapper1">
      <form action='#' onSubmit={handleSubmit} >
        <div class='title'>
          Faculty Register Form
        </div>
        <div class='field'>
          <input type='number' onChange={handleData} name='FacultyID' value={inputData.FacultyID}></input>
          <label>FacultyID</label>
        </div>
       
   
         <div class='field'>
          <input type='text' onChange={handleData}name='Firstname' value={inputData.Firstname}></input>
          <label>Firstname</label>
         </div>
         <div class='field'>
        <input type='text' onChange={handleData} name='Lastname' value={inputData.Lastname}></input>
        <label>Lastname</label>
         </div>

       
        
        <div className='gender1'>

<p><label><input type='radio' onChange={handleData} name='Gender' value="male"></input>Male</label></p>
<p><label><input type='radio' onChange={handleData} name='Gender' value="female"></input>Female</label></p>
</div>
<div class="field">
                    <input type="text" onChange={handleData} name='Email' value={inputData.Email}></input>
                    <label>Email</label>
                </div>

                <div class="field">
                    <input type="text" onChange={handleData}name='password' value={inputData.password}></input>
                    <label>password</label>
                </div>
                <div class="field">
                    <input type="number" onChange={handleData}name='phonenumber' value={inputData.phonenumber}></input>
                    <label>phonenumber</label>
                </div>
                <div class="field">
                    <input type="text"onChange={handleData}name='address' value={inputData.address}></input>
                    <label>Address</label>
                </div>
                <div class="field">
                    <input type="submit" value='Register'></input>
                    <input type='submit' value='Reset'></input>
                    </div>
           </form>      


        




</div>






      )
}

export default Facultyreg