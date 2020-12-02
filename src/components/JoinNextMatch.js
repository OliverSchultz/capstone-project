import { useState } from "react";
import PlayerForm from "./PlayerForm";
//hier muss der Enter-Button aus der registrierung importiert werden

export default function JoinNextMatch() {
	const [participants, setParticipant] = useState([
		/*{
			player: "Schluckusspechtus",
			join: true,
		},
		{
			player: "Il Colosso",
			join: true,
		},*/
	]);
	// addNewButtonToParticipantsArray
	function addParticipant(participant) {
		setParticipant([...participants, participant]);
	}

	return (
		<>
			<p>
				Hier erscheinen die registrierten Teilnehmer und daneben ein
				active/inactive-Button:
			</p>
			<ul>
				{participants.map((participant) => {
					return (
						<li>
							<p>{participant.player}</p>
							<p>{participant.join}</p>
						</li>
					);
				})}
			</ul>
			{/* Dieser Button muss mit dem Register-Button verknüpft werden oder besser mit der erfolgreich abgeschlossenen Registrierung*/}
			<button
				onClick={() => {
					addParticipant({
						player: "Schluckusspechtus",
						join: true,
					});
				}}
			>
				DieserButtonMussDieEnterTasteImRegistrierungsFormularWerden
			</button>
			<PlayerForm onSubmit={addParticipant} />
		</>
	);
}
