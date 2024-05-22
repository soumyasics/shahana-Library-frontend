import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Staffheader from './Staffheader';
import Footer from './Footer';

function Feedbackview() {
   const[feedback,Setfeedback]=useState([]);



    

    
   
     const feedbacklist=()=>{
        axios.get("http://localhost:3000/viewfeedbacks")
        .then((res)=>{
            console.log(res.data.data);
            Setfeedback(res.data.data)
        })
        .catch((err)=>{
            console.log(err.data);
        });
        
    };
   useEffect(()=>{
    feedbacklist()
   },[])
     
  return (
    <div>
        <Staffheader/>
           <div style={{marginTop:"150px"}}
        className='d-flex justify-content-around'>
        </div>
            <div className='="container'>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='table_scroll'>
                        <table className='table'>
                            <thead>
                                <tr className='table-primary'>
                                    <th scope='col'className='scroll'>
                                        s no
                                    </th>
                                   
                                    <th scope='col' className='scroll'>
                                        Student name
                                    </th>
                                    <th>Book name</th>
                                    <th scope='col' className='scroll'>
                                         Feedback
                                    </th>

                                 

                                </tr>
                            </thead>
                            {feedback.map((value,index)=>(
                                <tbody>
                                    <tr>
                                        <th>{index+1}</th>
                                         <td>{value.Firstname}{value.Lastname}</td>
                                         <td>{value.bookname}</td>
                                         <td>{value.Comment}</td>
                                       
                                       </tr>
                                </tbody>
                          ))}
                        </table>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Footer/>
    </div>
  )
}

export default Feedbackview