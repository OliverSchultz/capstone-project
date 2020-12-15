import { useEffect, useState } from "react";
import PlayerForm from "./PlayerForm";
import Header from "./Header";
import UpcomingMatchday, { upcomingMatchdayToISOString } from "./Date";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import PlayerCount from "./PlayerCount";
import styled from "styled-components/macro";

export default function JoinNextMatch() {
	let pageHeader = "Anmeldung für den: ";
	// Der nächste Freitag
	const upcomingMatchday = upcomingMatchdayToISOString();

	// Der initiale Zustand der Spielerliste ist entweder a) eine bestehende Liste aus LocalStorage oder b) ein leeres Array
	const [participants, setParticipants] = useState(
		loadLocally(upcomingMatchday) || []
	);

	// Seiteneffekt: Speichere in LocalStorage, wenn sich die Liste der Partizipanten ändert
	useEffect(() => {
		saveLocally(upcomingMatchday, participants);
	}, [participants, upcomingMatchday]);

	// Fügt einen neuen Spieler hinzu
	function addParticipant(participant) {
		setParticipants([...participants, participant]);
	}

	function calculatePlayerAttendance(participants) {
		const playersAttending = participants.filter(
			(participant) => participant.participate === "yes"
		);
		return playersAttending.length;
	}

	function AddRadioButton({ playerNumber, player }) {
		const handleChange = (event) => {
			const participantsUpdated = participants.map((participant, index) => {
				if (index === playerNumber) {
					participant.participate = event.target.value;
				}
				return participant;
			});

			setParticipants(participantsUpdated);
		};
		return (
			<>
				<form>
					<label>
						<input
							type="radio"
							value="no"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "no"}
						></input>
						ich fahre lieber nackt U-Bahn
					</label>

					<label>
						<input
							type="radio"
							value="maybe"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "maybe"}
						></input>
						unklar
					</label>

					<label>
						<input
							type="radio"
							value="yes"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "yes"}
						></input>
						bin dabei!
					</label>
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

			<PlayerCount
				numberOfParticipants={calculatePlayerAttendance(participants)}
			/>

			<ul>
				{participants.map((participant, index) => {
					return (
						<Li key={index}>
							<h4>{participant.player}</h4>
							<div>
								<AddRadioButton playerNumber={index} player={participant} />
							</div>
						</Li>
					);
				})}
			</ul>
		</>
	);
}

const Li = styled.li`
	list-style-type: none;
`;
