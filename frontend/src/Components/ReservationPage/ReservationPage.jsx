import React, { useState } from "react";
import "./ReservationPage.css";

const ReservationPage = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [people, setPeople] = useState("");
	const [table, setTable] = useState("");
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("http://localhost:3000/reservas/criar", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				telefone: phone,
				qtdpessoas: people,
				preferencia: table,
				data: date,
				time: time,
			}),
		})
			.then((res) => {
				if (!res.ok) throw new Error("Erro no servidor");
				return res.json();
			})
			.then((data) => {
				setSuccessMessage("Reserva feita com sucesso! 🎉");
				setErrorMessage("");
				// Limpar campos se quiser
				setName("");
				setPhone("");
				setPeople("");
				setTable("");
				setDate("");
				setTime("");
			})
			.catch((err) => {
				setErrorMessage("Falha ao fazer reserva. Tente novamente.");
				setSuccessMessage("");
				console.error(err);
			});
	};

	return (
		<section id="ReservationPage">
			<div id="ReservationPage-block">
				<div id="title-ReservationPg">
					<div className="line-respg"></div>
					<p>Faça sua reserva</p>
					<div className="line-respg"></div>
				</div>

				<form id="contentReserPg" onSubmit={handleSubmit}>
					<div id="infoReserv-list">
						<div className="item-inforeserv">
							<input
								placeholder="Nome completo"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>

						<div className="item-inforeserv">
							<input
								placeholder="Telefone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>

						<div className="item-inforeserv">
							<input
								placeholder="Quantidade de pessoas"
								type="number"
								min="1"
								value={people}
								onChange={(e) => setPeople(e.target.value)}
								required
							/>
						</div>

						<div className="item-inforeserv">
							<input
								placeholder="Preferência de mesa"
								value={table}
								onChange={(e) => setTable(e.target.value)}
							/>
						</div>

						<div className="item-inforeserv">
							<input
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
								required
							/>
						</div>

						<div className="item-inforeserv">
							<input
								type="time"
								value={time}
								onChange={(e) => setTime(e.target.value)}
								required
							/>
						</div>
					</div>

					<div id="text-respg">
						<p>
							Para garantir sua experiência na Vila Imperiale, recomendamos que
							as reservas sejam feitas com pelo menos 24 horas de antecedência.
							As mesas são mantidas por até 15 minutos após o horário marcado.
							Após a solicitação, você receberá a confirmação via WhatsApp.
						</p>
						<p>
							<strong>Estamos esperando por você!</strong>
						</p>

						<button type="submit">RESERVAR</button>
						{successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
						{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
					</div>
				</form>
			</div>
		</section>
	);
};

export default ReservationPage;
