import React, { useState } from 'react'
import './Student_login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'



function Student_login() {
  const navigate=useNavigate()
  const Data = { email: "", password: "" }
  const [inputData, setinputData] = useState(Data)
  function handleData(a) {
    setinputData({ ...inputData, [a.target.name]: a.target.value })
    console.log(inputData);
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!inputData.email || !inputData.password) {
      alert("All fields are Mandatory")
    }
    else {
      axios.post("http://localhost:3000/std_login1", inputData)
        .then((a) => {
          console.log(a);
            alert(a.data.msg)
            localStorage.setItem("studentid",a.data.Data._id)
                    console.log(a.data.Data._id);
         
            if(a.data.status){
              navigate('/home')
            }

          
        })
        .catch((err) => {
          console.log(err);

        }, [])

    }
  }
  return (


    <div>
      <Header/>

      <section class=" text-center text-lg-start">

        <div class="card mb-3">
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9naW58ZW58MHx8MHx8fDA%3D" alt="Trendy Pants and Shoes"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">

                <form action='#' onSubmit={handleSubmit}>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <caption>StudentLogin</caption>
                    <label class="form-label" for="form2Example1">Email</label>
                    <input type="email"
                      id="form2Example1"
                      class="form-control"
                      name='email'
                      onChange={handleData} />

                  </div>


                  <div data-mdb-input-init class="form-outline mb-4">
                    <label class="form-label" for="form2Example2">Password</label>
                    <input type="password"
                      id="form2Example2"
                      class="form-control"
                      name='password'
                      onChange={handleData} />

                  </div>

                  <div class="row mb-4">
                    <div class="col d-flex justify-content-center">


                    </div>

                      <input type="submit"
                        value="LOGIN"
                        className="btn" />



                    <div className='register'>
                      Not a member? <Link to='/stdregister'><a href="#">Register here!</a></Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>






        </div>
       
      </section>
      <br/>
      <Footer/>
    </div>

  )
}


export default Student_login