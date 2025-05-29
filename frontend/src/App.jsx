import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import FilterPizza from './Components/Menu/FilterPizza.jsx';
import ProductList from './Components/Menu/ProductList.jsx';

// Simulação de autenticação (substitua por lógica real)
// const isAuthenticated = () => {
//   return localStorage.getItem('auth') === 'true';
// };

// function MainApp() {
//   return (
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<UserLogin />} />
//         <Route path="/cadastro" element={<CreateUser />} />
//         <Route path="/reserva" element={isAuthenticated() ? <ReservationPage /> : <Navigate to="/login" />} />
//         <Route path="/" element={isAuthenticated() ? <MainApp /> : <Navigate to="/login" />} />
//         {/* fallback */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Router>
//   );
// }

function App() {
  return (
    <>
      <FilterPizza/>
      <ProductList/>
    </>
  )
}

export default App;
