import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home.jsx'
import Student_list from './components/Student_list.jsx'
import Navbar from './components/Navbar.jsx'
import Student_edit from './components/Student_edit.jsx';
import Student_delete from './components/Student_delete.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
   


     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Student_list' element={<Student_list/>}></Route>
        <Route path='/edit/:id' element={<Student_edit/>}></Route>
        <Route path='/delete/:id' element={<Student_delete/>}></Route>


       

      </Routes>
    </Router>
  
   
  
  </React.StrictMode>,
)
