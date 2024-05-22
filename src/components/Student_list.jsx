import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

function Student_list() {

  const [student, setstudent] = useState([])
  
  useEffect(() => {
    add()
  })



  const add = async () => {
    const result = await axios.get('http://localhost:3000/students')
    
    setstudent(result.data)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">

            <table className="table table-info mt-5 h5 text-cenetr">
              <thead className='text-center'>
                <th>Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Action</th>




              </thead>
             
                {student.map((val) => {
                  return (
                   <tbody className='text-center'>
                      <th>{val.id}</th>
                      <th>{val.name}</th>

                      <th>{val.mobile}</th>
                      <th>{val.address}</th>
                     

                     
                      <th > 
                        <NavLink></NavLink>
                        <NavLink className='btn btn-outline-success ml-4'  to={`/delete/${val.id}`}>Delete</NavLink>
                        <NavLink className='btn btn-outline-danger  ml-4'   to={`/edit/${val.id}`}>Edit</NavLink>

                      </th>
                      </tbody>
                  )
                })}
            
             </table>
          </div>
        </div>
      </div>
      
     
    </>
   
  )
}

export default Student_list