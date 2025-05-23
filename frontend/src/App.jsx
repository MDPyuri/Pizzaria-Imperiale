import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx'
import Reservation from './Components/Reservation/Reservation.jsx'

function App() {

  return (
    <>
    <Header/>
    <Home/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default App
