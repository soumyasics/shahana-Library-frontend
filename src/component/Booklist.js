import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Staffheader from './Staffheader'
import Footer from './Footer'

function Booklist() {

    const[Booklist,Setbooklist]=useState([])
    const viewbooklist=()=>{
        axios.get("http://localhost:3000/view")
        .then((res)=>{
        Setbooklist(res.data.data)
        console.log(res);

         })
 
        .catch((error)=>{
 
         Setbooklist(error)
 
 
         })
 
            }  

            useEffect(()=>{
                  viewbooklist()
          })
  return (
    <div>
        <Staffheader/>
         <div style={{marginTop:"50px"}}
        className='d-flex justify-content-around'>
           <caption>Booklist</caption>
            
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
                                        Book image
                                    </th>
                                    <th scope='col' className='scroll'>
                                        Book Name
                                    </th>
                                    <th scope='col' className='scroll'>
                                       book Author
                                    </th>
                                    <th scope='col' className='scroll'>
                                        Book ISBN No
                                    </th>
                                    <th scope='col' className='scroll'>
                                        Book Description
                                    </th>
                                    </tr>
                            </thead>
                            {Booklist.map((value,index)=>(
                                <tbody>
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>  <img src={`http://localhost:3000/${value.image.filename}`}/></td>
                                         <td>{value.title}</td>
                                         <td>{value.author}</td>
                                         <td>{value.isbn}</td>
                                         <td>{value.description}</td>
                                      
                                     
                                       </tr>
                                 </tbody>
                          ))}
                        </table>
                    </div>
                </div>
            </div>
<Footer/>
    </div>
  )
}

export default Booklist