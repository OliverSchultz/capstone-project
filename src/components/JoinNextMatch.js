import { useState } from "react";

export default function JoinNextMatch() {
	const [participants, setParticipant] = useState([
		{
			player: "Schluckusspechtus",
			join: true,
		},
		{
			player: "Il Colosso",
			join: true,
		},
	]);
	// addNewButtonToParticipantsArray
	function addParticipant(participant) {
		setParticipant([...participants, participant]);
	}

	return (
		<>
			<p>
				Hier erscheinen die registrierten Teilnehmer und daneben ein
				Anmelde-Button:
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
		</>
	);
}
