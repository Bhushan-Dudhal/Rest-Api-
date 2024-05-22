import React, { useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Student_delete() {

    const param = useParams();
    console.log(param);
    
   const goTo =useNavigate()

    useEffect(() => {
        delete_data()
    })

      const delete_data = async () => {
           await axios.delete(`http://localhost:3000/students/${param.id}`,{
         
            
            }).then(Response => {
                alert("Delete Success")
                goTo('/student_list')
                
            }).catch(error => {
                alert('Not Delete')
            })
        
   

    }
  return (
    <div>Student_delete</div>
  )
}

export default Student_delete