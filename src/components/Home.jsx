import React from 'react'
import axios from 'axios'

class Home extends React.Component{

  constructor() {
    super()
    this.state = {

      name: '',
      mobile: '',
      address:''
    }
    }
    
    changeName = (event) => {
        this.setState({
            name:event.target.value
        })
  }
  

  changeMibile = (event) => {
        this.setState({
            mobile:event.target.value
        })
  }

  changeAddress = (event) => {
        this.setState({
            address:event.target.value
        })
  }
  

  formsubmit =async () => {
    event.preventDefault();
    console.log(this.state);


    await axios.post('http://localhost:3000/students', this.state)
    
    alert('Data Successfully Added')
  }
  






  render()

  {
     return (
    <div className="container mt-5">
      <div className="row">
        <div className="offset-md-2 col-md-8 text-white p-4">
          <div className="row">
            <div className="col-md-12 bg-dark">

              <form onSubmit={this.formsubmit}  >
                <div className="col-md-12 text-center text-white">
                  <h1>ADD STUDENT</h1>
                </div>

                <div className="col-md-12 ">
                  <label htmlFor=""> Enter Your Name</label>
                  <input type="text" className='form-control' name="name" value={this.state.name} onChange={this.changeName}  /><br />
                    </div>
                  <div className="col-md-12 ">
                      
                    <label htmlFor=""> Enter Your Mobile</label>
                  <input type="number" className='form-control' value={this.state.mobile} name="mobile"  onChange={this.changeMibile}/><br />
                    </div>

                  <div className="col-md-12 ">
                  
                  <label htmlFor=""> Enter Your Address</label>
                     <input type="text" className='form-control' value={this.state.address} name="address" onChange={this.changeAddress} /><br /><br />
                    </div>
                    
                  <div className="col-md-12 ">
                     
                 <button className='btn btn-outline-warning form-control'>SAVE</button><br />
                </div>
                <br />
                    
                  







             
              </form>
            

            </div>
          </div>
        </div>
      </div>
   </div>
  )
  }
}

export default Home