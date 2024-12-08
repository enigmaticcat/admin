// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddDoctor from './pages/AddDoctor'
import Dashboard from './pages/Dashboard'
import DoctorsList from './pages/DoctorsList'
import Login from './pages/Login'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
<Navbar />
      <Routes>
<Route path='/' element={<Dashboard />} />
<Route path='/login' element={<Login />} />
<Route path='/appointments' element={<Appointments />} />
<Route path='/add-doctor' element={<AddDoctor />} />
<Route path='/doctors-list' element={<DoctorsList />} />
      </Routes>
<Footer/>
      
    </div>
  )
}

export default App
