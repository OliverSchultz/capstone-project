import { useState } from "react";
import PlayerForm from "./PlayerForm";
import Header from "./Header";

export default function JoinNextMatch({ onAddParticipant }) {
	const pageHeader = "Anmeldung für den: xx.xx.xx";
	const [participants, setParticipant] = useState([]);

	function addParticipant(participant) {
		setParticipant([...participants, participant]);
		onAddParticipant(participants.length + 1);
	}

	function AddRadioButton({ playerNumber }) {
		const handleChange = (event) => {
			console.log(event.target.value, event.target.name);
		};
		return (
			<>
				<form>
					<input
						type="radio"
						value="yes"
						name={`radiobutton[${playerNumber}]`}
						onChange={handleChange}
					></input>
					<label htmlFor="yes">yes</label>
					<input
						type="radio"
						value="no"
						name={`radiobutton[${playerNumber}]`}
						onChange={handleChange}
					></input>
					<label htmlFor="no">no</label>
					<input
						type="radio"
						value="maybe"
						name={`radiobutton[${playerNumber}]`}
						onChange={handleChange}
					></input>
					<label htmlFor="maybe">maybe</label>
				</form>
			</>
		);
	}

	return (
		<>
			<Header datatransport={pageHeader} />

			<ul>
				{participants.map((participant, index) => {
					return (
						<li key={index}>
							<h4>{participant.player}</h4>
							<div>
								<AddRadioButton playerNumber={index} />
							</div>
						</li>
					);
				})}
			</ul>
			{/* Dieser Button muss mit dem Register-Button verknüpft werden oder besser mit der erfolgreich abgeschlossenen Registrierung*/}
			{/*			<button
				onClick={() => {
					addParticipant({
						player: "Schluckusspechtus",
					});
				}}
			>
				<label>an /ab</label>
			</button>*/}

			<PlayerForm onSubmit={addParticipant} />
		</>
	);
}
