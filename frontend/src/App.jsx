import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import ReservationPage from './Components/ReservationPage/ReservationPage.jsx';
import Reservation from './Components/Reservation/Reservation.jsx';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Home />
                            <Reservation />
                            <Footer />
                        </>
                    }
                />
                <Route path="/reserva" element={<ReservationPage />} />
            </Routes>
        </Router>
    );
}

export default App;
