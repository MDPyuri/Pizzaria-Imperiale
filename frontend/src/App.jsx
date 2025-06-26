import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx';
import Reservation from './Components/Reservation/Reservation.jsx';
import Cart from './Components/Order/Cart.jsx';
import Address from './Components/Order/Address.jsx';
import Payment from './Components/Order/Payment.jsx';
import UserLogin from './Components/CRUD/Login.jsx';
import CreateUser from './Components/CRUD/Create.jsx';
import UpdateUser from './Components/CRUD/Update.jsx';
import UserProfile from './Components/CRUD/Profile.jsx';
import DeleteUser from './Components/CRUD/Delete.jsx';
import Menu from './Components/Menu/Menu.jsx';
import About from './Components/About/About.jsx';
import CallToMenu from './Components/CallToMenu/CallToMenu.jsx';

// Função auxiliar removida - agora usamos o AuthContext

function MainApp() {
    return (
        <>
            <Header />
            <Home />
            <CallToMenu />
            <Reservation />
            <About />
            <Footer />
        </>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/login" element={<UserLogin />} />
                    <Route path="/cadastro" element={<CreateUser />} />
                    <Route
                        path="/reserva"
                        element={
                            <ProtectedRoute>
                                <ReservationPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/delete" element={<DeleteUser />} />
                    <Route
                        path="/perfil"
                        element={
                            <ProtectedRoute>
                                <UserProfile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/update" element={<UpdateUser />} />
                    <Route path="/" element={<MainApp />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route
                        path="/carrinho"
                        element={
                            <ProtectedRoute>
                                <Cart />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/endereco"
                        element={
                            <ProtectedRoute>
                                <Address />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/pagamento"
                        element={
                            <ProtectedRoute>
                                <Payment />
                            </ProtectedRoute>
                        }
                    />
                    {/* fallback */}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
