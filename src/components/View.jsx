import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,setData]=useState([])
    const fetchData=()=>{
      axios.get("http://localhost:8080/view").then(
        (response)=>{
          console.log(response.data)
          setData(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">employee code</th>
      <th scope="col">employee name</th>
      <th scope="col">mobile</th>
      <th scope="col">address</th>
    </tr>
  </thead>
  <tbody>
  {data.map(
    (value,index)=>{
        return    <tr>
    <th scope="row">{index}</th>
    <td>{value.employeecode}</td>
    <td>{value.employeename}</td>
    <td>{value.mobile}</td>
    <td>{value.address}</td>
  </tr>
    }
)
  }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View