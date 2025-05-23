import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx'
import UserLogin from './Components/CRUD/Login.jsx'
import CreateUser from './Components/CRUD/Create.jsx'
import UpdateUser from './Components/CRUD/Update.jsx'
import UserProfile from './Components/CRUD/Profile.jsx'
import DeleteUser from './Components/CRUD/Delete.jsx'


function App() {

  return (
    <>
    <Header/>
    <DeleteUser/>
    </>
  )
}

export default App
