import { useEffect, useState } from "react";
import PlayerForm from "./PlayerForm";
import Header from "./Header";
import UpcomingMatchday, { upcomingMatchdayToISOString } from "./Date";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import PlayerCount from "./PlayerCount";

export default function JoinNextMatch() {
	let pageHeader = "Anmeldung für den: ";

	// Der nächste Freitag
	const upcomingMatchday = upcomingMatchdayToISOString();

	// Der initiale Zustand der Spielerliste ist entweder a) eine bestehende Liste aus LocalStorage oder b) ein leeres Array
	const [participants, setParticipant] = useState(
		loadLocally(upcomingMatchday) || []
	);

	// Seiteneffekt: Speichere in LocalStorage, wenn sich die Liste der Partizipanten ändert
	useEffect(() => {
		saveLocally(upcomingMatchday, participants);
	}, [participants, upcomingMatchday]);

	// Fügt einen neuen Spieler hinzu
	function addParticipant(participant) {
		setParticipant([...participants, participant]);
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
			<div>
				<Header datatransport={pageHeader} />
				<UpcomingMatchday />
			</div>

			<PlayerForm onSubmit={addParticipant} />

			<PlayerCount numberOfParticipants={participants.length} />

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
		</>
	);
}

/* Dieser Button muss mit dem Register-Button verknüpft werden oder besser mit der erfolgreich abgeschlossenen Registrierung*/

/*			<button
				onClick={() => {
					addParticipant({
						player: "Schluckusspechtus",
					});
				}}
			>
				<label>an /ab</label>
			</button>*/
