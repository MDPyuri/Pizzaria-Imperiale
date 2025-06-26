import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx';
import Reservation from './Components/Reservation/Reservation.jsx';
import Cart from './Components/Order/Cart.jsx';
import Address from './Components/Order/Address.jsx';
import Payment from './Components/Order/Payment.jsx';
import UserLogin from './Components/CRUD/Login.jsx'
import CreateUser from './Components/CRUD/Create.jsx'
import UpdateUser from './Components/CRUD/Update.jsx'
import UserProfile from './Components/CRUD/Profile.jsx'
import DeleteUser from './Components/CRUD/Delete.jsx'
import FilterPizza from './Components/Menu/FilterPizza.jsx';
import ProductList from './Components/Menu/ProductList.jsx';
import Menu from './Components/Menu/Menu.jsx';
import About from './Components/About/About.jsx';
import Reservation from './Components/Reservation/Reservation.jsx'

// Simulação de autenticação (substitua por lógica real)
// const isAuthenticated = () => {
//   return localStorage.getItem('auth') === 'true';
// };
const isAuthenticated = async () => {
    try {
        const response = await fetch('http://localhost:3000/usuarios/me', {
            credentials: 'include', // Importante para enviar os cookies
        });

        if (response.ok) {
            return true; // Autenticado
        } else {
            return false; // Não autenticado
        }
    } catch (error) {
        return false; // Erro na requisição
    }
};


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



// function App() {
//   return (
//     <>
//       <Menu/>
//     </>
//   )
//       <Header />
//       <Home />
//       <Reservation />
//       <About />
//       <Footer />
//     </>
//   );
// }

function App() {
    return (
        <>
            <Router>
                <Header />
                {/* <Menu/> */}
                <Routes>
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/endereco" element={<Address />} />
                    <Route path="/pagamento" element={<Payment />} />
                </Routes>
            </Router>
        </>
    );
  return (
    <>
      <Menu/>
    </>
  )
      <Header />
      <Home />
      <Reservation />
      <About />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/cadastro" element={<CreateUser />} />
        <Route path="/reserva" element={isAuthenticated() ? <ReservationPage /> : <Navigate to="/login" />} />
        <Route path="/delete" element={<DeleteUser />} />
        <Route path="/perfil" element={<UserProfile />} />
        <Route path="/update" element={<UpdateUser />} />
        <Route path="/" element={isAuthenticated() ? <MainApp /> : <Navigate to="/login" />} />
        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
