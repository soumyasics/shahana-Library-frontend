import axios from 'axios';
import React, { useEffect, useState } from 'react'

import './Request.css';
import Footer from './Footer';

import Staffheader from './Staffheader';
import { Link } from 'react-router-dom';



function Request() {

    const [approv, setApprove] = useState([]);
    useEffect(() => {

        notapprove();
    }, []);
    const accept = (id) => {
    console.log(id);
        axios.post(`http://localhost:3000/accept/${id}`)
            .then(res => {
                if (res.status == 200) {

                    alert("approve successfully")
                    if(res.data.data.length>0)
                    setApprove(res.data.data)
                 else 
                 setApprove([])
                     window.location.reload(false)
                }

            })
            .catch(err => {
                console.log(err);
            })
    };
    const notapprove=()=>{
        axios.get("http://localhost:3000/approval4")
        .then((res)=>{
            console.log(res.data.data);
            setApprove(res.data.data)
        })
        .catch((err)=>{
            console.log(err.data);
        })
    };

    const rejectborrow=(bid)=>{
        axios.post(`http://localhost:3000/delete/${bid}`)
        .then((res)=>{
            console.log(res.data);
            alert("borrow deleted")
        })
        .catch((err)=>{
            console.log(err.err);
        })
    };
    return (
        <div>
            <Staffheader />
            <div style={{ marginTop: "150px" }}
                className='d-flex justify-content-around'>
                  <Link to='/bookhire'><button>Borrow details</button></Link>  
                {
                  (approv.length>0)?(
            <div className='container'>
                <div className='col-12 d-flex justify-center'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>s no</th>
                                <th scope='col'>Book name</th>
                                <th scope='col'>Student name</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Action</th>
                            </tr>
                         
                        </thead>

                      
                     {
                      approv.map((value,index)=>
(



                      
                        <tbody>
                            <tr>
                                <th>{index+1}</th>
                                <td>{value.bookid.title}</td>
                                <td>{value.Studentid.studentname}</td>
                                <td>{value.Date}</td>
                                <td className='col-3'>
                                    <button
                                   
                                    onClick={()=>{
                                        accept(value._id)
                                    }}>
                                        Accept
                                    </button>
                                    <button
                                   
                                    onClick={()=>{
                                        rejectborrow(value._id)
                                    }}>
                                        Reject
                                    </button>
                                    
                                    
                                </td>
                            </tr>
                        </tbody>
                      
                    
                
)
                      )
                

                        
                    }              
                        

                    </table>
                </div>
                </div>
                  
        ):(
            <div class="dataname">Request not found</div>
        )
    }
                    </div>

            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br/>
            <br/>
            <br/><br/>
           
        
        <Footer />
</div>
    )
}

export default Request