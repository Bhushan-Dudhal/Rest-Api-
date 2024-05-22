import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Student_edit() {

    const [data, setdata] = useState([])
    const[name,setname]=useState([])
    const[mobile,setmobile]=useState([])
    const[address,setaddress]=useState([])
    


    const param = useParams();

    const goTo=useNavigate()

    useEffect(()=>{
        add()
    })



    const add = async () => {
    const result = await axios.get(`http://localhost:3000/students/${param.id}`)
    // console.log(result.data);
    setdata(result.data)
    setname(result.data.name)
    setmobile(result.data.mobile)
    setaddress(result.data.address)

    }
    
    const saveform =async (id) => {
        await axios.put(`http://localhost:3000/students/${id}`,
        {
            name: name,
            mobile: mobile,
            address:address
            
            }).then(Response => {
                alert("Update Success")
                goTo('/student_list')
            }).catch(error => {
                alert('Not Upadate')
            })
        
        
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-2 col-md-8 text-white p-4">
          <div className="row">
            <div className="col-md-12 bg-dark">

            
                <div className="col-md-12 text-center text-white">
                  <h1>ADD STUDENT</h1>
                </div>

                <div className="col-md-12 ">
                  <label htmlFor=""> Enter Your Name</label>
                  <input type="text" className='form-control' defaultValue={name} onChange={(e)=>setname(e.target.value)} /><br />
                    </div>
                  <div className="col-md-12 ">
                      
                    <label htmlFor=""> Enter Your Mobile</label>
                  <input type="number" className='form-control' defaultValue={mobile} onChange={(e)=>setmobile(e.target.value)} /><br />
                    </div>

                  <div className="col-md-12 ">
                  
                  <label htmlFor=""> Enter Your Address</label>
                     <input type="text" className='form-control' defaultValue={address}  onChange={(e)=>setaddress(e.target.value)}/><br /><br />
                    </div>
                    
                  <div className="col-md-12 ">
                     
                 <button className='btn btn-outline-warning form-control' onClick={()=>saveform(data.id)}>UPDATE</button><br />
                </div>
                <br />
                    
                  







             
            
            

            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Student_edit