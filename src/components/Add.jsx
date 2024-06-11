import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [data,setData]=useState([
        {
         "employeecode":"",
         "employeename":"",
         "mobile":"",
         "address":""   
        }
    ])
    const inputHandler=(event)=>
        {
            setData({...data,[event.target.name]:event.target.value})
        }
        const readValue=()=>
            {
                console.log(data)
                axios.post("http://localhost:8080/add",data).then(
                    (response)=>{
                        console.log(response.data)
                        if (response.data.status=="success") {
                         alert("success")
                            
                        } else {
                            alert("error")
                        }
                    }
                ).catch().finally()
            }
  return (
    <div>
<Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">employeecode</label>
                            <input type="text" className="form-control" name='employeecode' value={data.employeecode} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">employeename</label>
                            <input type="text" className="form-control"name='employeename' value={data.employeename} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <label htmlFor="" className="form-label">mobile</label>
                            <input type="text" className="form-control" name='mobile'value={data.mobile} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">address</label>
                            <input type="text" className="form-contol" name='address' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <button className="btn btn-success" onClick={readValue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add