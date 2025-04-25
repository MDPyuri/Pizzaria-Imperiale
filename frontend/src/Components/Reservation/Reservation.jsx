import React from 'react';
import "./Reservation.css";

const Reservation = () => {
    return (
        <section id="ReservationPage">
            <div id="ReservationPage-block">
                <div id="title-ReservationPg">
                    <div className="line-respg"></div>
                    <p>Faça sua reserva</p>
                    <div className="line-respg"></div>
                </div>

                <div id="contentReserPg">
                    <div id="infoReserv-list">
                        <div className="item-inforeserv">
                            <input placeholder="Nome completo" />
                        </div>

                        <div className="item-inforeserv">
                            <input placeholder="Telefone" />
                        </div>

                        <div className="item-inforeserv">
                            <input type="date" />
                        </div>

                        <div className="item-inforeserv">
                            <input type="time" />
                        </div>

                        <div className="item-inforeserv">
                            <select defaultValue="">
                                <option value="" disabled>
                                    Quantidade de pessoas
                                </option>
                                <option value="1">1 pessoa</option>
                                <option value="2">2 pessoas</option>
                                <option value="3">3 pessoas</option>
                                <option value="4">4 pessoas</option>
                                <option value="5">5 pessoas</option>
                                <option value="6">6 pessoas</option>
                                <option value="7+">7 ou mais</option>
                            </select>
                        </div>

                        <div className="item-inforeserv"></div>
                    </div>

                    <div id="text-respg">
                        <p>
                            Para garantir sua experiência na Vila Imperiale,
                            recomendamos que as reservas sejam feitas com pelo
                            menos 24 horas de antecedência. As mesas são
                            mantidas por até 15 minutos após o horário marcado.
                            Após a solicitação, você receberá a confirmação via
                            WhatsApp.
                        </p>
                        <p>
                            <strong>Estamos esperando por você!</strong>
                        </p>

                        <button>RESERVAR</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
