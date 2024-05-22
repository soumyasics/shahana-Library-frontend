import React, { useState } from 'react'
import './Staff_register.css'
import axios from 'axios'
import Staffheader from './Staffheader'
import Footer from './Footer'


     function Staff_register() {
    const Data = { Staffid: "", Firstname: "", Lastname: "", Email: "", Password: "", Phonenumber: "", Address: "" }
    const [inputData, setinputData] = useState(Data)
    function handleData(a) {
        setinputData({ ...inputData, [a.target.name]: a.target.value })
        console.log(inputData);
    }
    function handleSubmit(a) {
        a.preventDefault()
        if (!inputData.Staffid || !inputData.Firstname || !inputData.Lastname ||!inputData.Email || !inputData.Password || !inputData.Phonenumber || !inputData.Address) {
            alert("All fields are Mandatory")
        }
        else {
            axios.post("http://localhost:3000/staff_register", inputData)
                .then((a) => {
                    console.log(a);
                })
                .catch((err) => {
                    console.log(err);
                }, [])
        }
        alert("Registration success")
    }
 return (
   
     <div>
        <Staffheader/>
  
    

        <div class="wrapperS">
            <form action="#" onSubmit={handleSubmit}>
                <div class="title">
                    Staff Registration Form
                </div>
                <div class="field">
                    <input type='number' onChange={handleData} name='Staffid' value={inputData.Staffid}></input>
                    <label>StaffID</label>
                </div>
                <div class="field">
                    <input type='text' onChange={handleData} name='Firstname' value={inputData.Firstname}></input>
                    <label>Firstname</label>
                </div>
                <div class="field">
                    <input type='text' onChange={handleData} name='Lastname' value={inputData.Lastname}></input>
                    <label>Lastname</label>
                </div>


                <div class="field">
                    <input type="text" onChange={handleData} name='Email' value={inputData.Email}></input>
                    <label>Email</label>
                </div>
                

                <div class="field">
                    <input type="password" onChange={handleData} name='Password' value={inputData.Password}></input>
                    <label>password</label>
                </div>
                <div class="field">
                    <input type="number" onChange={handleData} name='Phonenumber' value={inputData.Phonenumber}></input>
                    <label>phonenumber</label>
                </div>
                <div class="field">
                    <input type="text" onChange={handleData} name='Address' value={inputData.Address}></input>
                    <label>Address</label>
                </div>

                <div class="field">
                    <input type="submit" value='Register'></input>
                    <input type='submit' value='Reset'></input>
                    </div>
            

            </form>
 </div>
 <Footer/>
 </div>
 
    )
}

export default Staff_register