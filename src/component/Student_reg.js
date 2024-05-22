import React, { useState } from 'react'
import './Student_reg.css'
import axios from 'axios'
import Header from './Header'
import Footer from './Footer'

function Student_reg() {
    
    const Data = { studentname: "", Rollno: '', class: "", email: "", password: "" }
    const [inputData, setinputData] = useState(Data)
    function handleData(a) {
        setinputData({ ...inputData, [a.target.name]: a.target.value })
        console.log(inputData);
    }
    function handleSubmit(a) {
        a.preventDefault()
        if (!inputData.studentname || !inputData.Rollno || !inputData.class || !inputData.email || !inputData.password) {
            alert("plz enter all fields")
        }
        else {
            axios.post("http://localhost:3000/std_register", inputData)
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
        <div>
        <Header/>
        <section class="h-100 bg-dark">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col">
                        <div class="card card-registration my-4">
                            <div class="row g-0">
                                <div class="col-xl-6 d-none d-xl-block">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" class="img-fluid" />
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-black">
                                        <h3 class="mb-5 text-uppercase">Student registration form</h3>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div data-mdb-input-init class="form-outline mb-4">
                                              

                                                 <label class="form-label" for="form3Example97">Student Name</label>
                                                <input type="text" 
                                                id="form3Example97" 
                                                class="form-control form-control-lg" 
                                                name='studentname' 
                                                onChange={handleData}/> 
                                                </div>
                                            </div>


                                        </div>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example97">Roll No</label>
                                                    <input type="text" 
                                                    id="form3Example97" 
                                                    class="form-control form-control-lg" 
                                                    name='Rollno'
                                                     onChange={handleData} />
                                                </div>
                                            </div>

                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Class</label>
                                            <input type="text"
                                             id="form3Example97"
                                              class="form-control form-control-lg" 
                                              name='class' 
                                              onChange={handleData} />

                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Email ID</label>
                                            <input type="text" 
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='email'
                                              onChange={handleData} />


                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Password</label>
                                            <input type="text"
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='password' 
                                             onChange={handleData} />

                                        </div>
                                        <div class="submitbutton">
                                            <button type='submit' onClick={handleSubmit}>SUBMIT</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <Footer/>
        </div>
    
    )
}

export default Student_reg;