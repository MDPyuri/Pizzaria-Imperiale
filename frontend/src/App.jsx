import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx';
import Reservation from './Components/Reservation/Reservation.jsx';
import Cart from './Components/Order/Cart.jsx';
import Address from './Components/Order/Address.jsx';
import Payment from './Components/Order/Payment.jsx';

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/carrinho" element={<Cart />} />
                    <Route path="/endereco" element={<Address />} />
                    <Route path="/pagamento" element={<Payment />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
