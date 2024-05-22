import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Bookhiring.css'
import Staffheader from './Staffheader';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Bookhiring() {
    const [vborrow,setvborrow]=useState([]);
    const borrowedlisted=()=>{
        axios.post("http://localhost:3000/bbooklist2/:id")
        .then((res)=>{
            console.log(res.data.data);
            setvborrow(res.data.data)
        })
        .catch((err)=>{
            console.log(err.data);
        });
      };
    useEffect(()=>{
        borrowedlisted()
    },[])
     return (
    <div>
        <Staffheader/>
           <div style={{marginTop:"50px"}}
        className='d-flex justify-content-around'>
           
            <Link to='/requestpage'><button>Requests</button></Link>
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
                                        Book name
                                    </th>
                                    <th scope='col' className='scroll'>
                                        Student name
                                    </th>
                                    <th scope='col' className='scroll'>
                                        Date
                                    </th>
                                    </tr>
                            </thead>
                            {vborrow.map((value,index)=>(
                                <tbody>
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>{value.bookid.title}</td>
                                         <td>{value.Studentid.studentname}</td>
                                        <td className='col-3'>{value.Date}</td>
                                     
                                       </tr>
                                 </tbody>
                          ))}
                        </table>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <Footer/>
            </div>
            )
}

export default Bookhiring
