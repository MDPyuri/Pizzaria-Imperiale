import React from 'react';
import './Reservation.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Reservation = () => {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();

    const handleReservationClick = (e) => {
        if (!isAuthenticated()) {
            e.preventDefault();
            navigate('/login', {
                state: { from: { pathname: '/reserva' } },
                replace: false,
            });
        }
    };
    return (
        <section className="space-reservation">
            <div className="reservation-block">
                <div className="all-content">
                    <div className="title-reservation">
                        <div className="line-res"></div>
                        <div className="title-res">
                            <p>Faça sua reserva</p>
                        </div>
                        <div className="line-res"></div>
                    </div>
                    <div className="subtitle-reservation">
                        <p>
                            Garanta sua experiência gastronômica sem
                            preocupações!
                        </p>
                    </div>
                    <div className="text-reservation">
                        <p>
                            Na Vila Imperiale, cada detalhe é pensado para
                            proporcionar momentos especiais. Independente da
                            ocasião queremos que sua experiência seja impecável
                            – e a melhor maneira de garantir isso é fazendo sua
                            reserva!
                        </p>
                        <p>
                            Ao reservar, você evita filas, garante o melhor
                            atendimento e pode até escolher um lugar especial
                            para a sua ocasião.
                        </p>
                    </div>
                    <div className="btn-content">
                        <Link to="/reserva" onClick={handleReservationClick}>
                            <button className="btn-reservation">
                                RESERVAR
                            </button>
                        </Link>
                    </div>
                    <div className="text-reservation2">
                        <p>
                            Nos vemos em breve para uma experiência deliciosa!
                        </p>
                    </div>
                    <div className="line2-res"></div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
