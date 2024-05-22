import React, { useState } from 'react'
import './Staffer.css'
import axios from 'axios'

function Staffer() {
    const Data = { Staffid: "", Firstname: "", Lastname: "",  Email: "", Password: "", Phonenumber: "", Address: "" }
    const [inputData, setinputData] = useState(Data)
    function handleData(a) {
        setinputData({ ...inputData, [a.target.name]: a.target.value })
        console.log(inputData);
    }
    function handleSubmit(a) {
        a.preventDefault()
        if (!inputData.Staffid || !inputData.Firstname || !inputData.Lastname  || !inputData.Email || !inputData.Password || !inputData.Phonenumber || !inputData.Address) {
            alert("plz Enter all fields")
        }
        else {
            axios.post("http://localhost:3000/staff_register", inputData)
                .then((a) => {
                    console.log(a);
                })
                .catch((err) => {
                    console.log(err);
                }, [])
                alert("Registration success")
        }
   
    }
  return (
    <div>
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
                                        <h3 class="mb-5 text-uppercase">Staff registration form</h3>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div data-mdb-input-init class="form-outline mb-4">
                                              

                                                 <label class="form-label" for="form3Example97">Staff ID</label>
                                                <input type="text" 
                                                id="form3Example97" 
                                                class="form-control form-control-lg" 
                                                name='Staffid' 
                                                onChange={handleData}/> 
                                                </div>
                                            </div>
                                            <div class="row">
                                            <div class="col-md-6 mb-4">
                                                <div data-mdb-input-init class="form-outline mb-4">
                                                    <label class="form-label" for="form3Example97"> Firstname</label>
                                                    <input type="text" 
                                                    id="form3Example97" 
                                                    class="form-control form-control-lg" 
                                                    name='Firstname'
                                                     onChange={handleData} />
                                                </div>
                                            </div>

                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Lastname</label>
                                            <input type="text"
                                             id="form3Example97"
                                              class="form-control form-control-lg" 
                                              name='Lastname' 
                                              onChange={handleData} />
                                               </div>

                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Email</label>
                                            <input type="text" 
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='Email'
                                              onChange={handleData} />


                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Password</label>
                                            <input type="text"
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='Password' 
                                             onChange={handleData} />

                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Phonenumber</label>
                                            <input type="text"
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='Phonenumber' 
                                             onChange={handleData} />

                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <label class="form-label" for="form3Example97">Address</label>
                                            <input type="text"
                                            id="form3Example97" 
                                            class="form-control form-control-lg"
                                             name='Address' 
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
            </div>
        </section >

        
    </div>
  )
}

export default Staffer