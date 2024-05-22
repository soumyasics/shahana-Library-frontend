import React from 'react'

function RR() {
 
  const approve=()=>{
    axios.get(`http://localhost:3000/notapprove`)
    .then((res)=>{
        console.log(res.data.data);
        setApprove(res.data.data)
    })
    .catch((err)=>{
        console.log(err.data);
    });

};
const rejectBorrow=(bid)=>{
    axios.post(`http://localhost:3000/deleteborrow/${bid}`)
    .then((res)=>{
        console.log(res.data);
        alert("borrow deleted")
    })
    .catch((err)=>{
        console.log(err.err);
    })

}

         const[borrow,setBorrow]=useState({
    bookid:id.id,
    studid:localStorage.getItem('studentid')||"",
    Date: new Date().toISOString().split('T')[0]
   })
   const borrowbook=(bookid)=>{
    console.log("data",borrow);
    borrow.bookid=bookid
    borrow.studid=localStorage.getItem('studentid')
    borrow.Date=new Date().toISOString().split('T')[0]
    axios.post("http://localhost:3000/borrowbook",borrow)
    .then((res)=>{
      setBorrow(res)
      console.log(res);
      if(res.data.status==200){
        alert('book borrowed')
      }
      else{
        alert("book already borrowed")
      }
    })
    .catch((err)=>{
      setData(err)
    })
   }
   const [wish,setWish]=useState({
    bookid:id.id,
    studid:localStorage.getItem('studentid')||"",
    Date:new Date()
   })
   const wishlistbook=(bookid)=>{
    console.log("data",wish);
    axios.post('http://localhost:3000/wishbook',wish)
    .then((res)=>{
      setWish(res);
      if(res.data.status==200){
        alert("wishlist added")
      }
      else{
        alert("wishlist not added")
      }
    })
    .catch((err)=>{
      setData(err)
    })
   }
   return(

   <div>
       <button type='button' class="btn btn-outline-success" onClick={()=>wishlistbook(data.bookid)}/>
                     <button type='button' class="btn btn-outline-success" onClick={()=>borrowbook(data.bookid)}/>
    </div>
     /* <button type='button'
                                        style={{borderRadius:"50%",margin:"0px 2px"

                                        }}
                                        className='btn btn-success'
                                        onClick={()=>{
                                            acceptbook(value._id)
                                        }}
                                        >
                                            approv
                                        </button>
                                        <button type='button' style={{borderRadius:"80%"}}
                                            className='btn btn-danger'
                                            onClick={()=>rejectBorrow(value._id)}
                                        >
                                            Reject
                                        </button>
                                        <button type='submit' onClick={()=>{
                                            rejectBorrow(value._id)
                                        }}></button> */
                                      //   {approv.map((value,index)=>{
                                      //     <thbody>
                                      //         <tr>
                                      //             <th>{index+1}</th>
                                      //             <td>{value.bookid.title}</td>
                                      //             <td>{value.Studentid.studentname}</td>
                                      //             <td>{value.Date}</td>
                                      //             <td className='col-3'>
                                                     
                                      //             </td>
                                      //         </tr>
                                      //     </thbody>
                                      // })}
   )
}

export default RR