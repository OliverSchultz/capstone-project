import NavBar from "./Navigation.js";
import { useEffect, useState } from "react";
import PlayerForm from "./PlayerForm";
import Header from "./Header";
import UpcomingMatchday, { upcomingMatchdayToISOString } from "./Date";
import saveLocally from "./lib/saveLocally";
import loadLocally from "./lib/loadLocally";
import PlayerCount from "./PlayerCount";
import styled from "styled-components/macro";

export default function JoinNextMatch() {
	let pageHeader = "Anmeldung für: ";

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
					<Label theme="colorNo">
						<input
							type="radio"
							value="no"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "no"}
						></input>
						leider nein
					</Label>

					<Label theme="colorMaybe">
						<input
							type="radio"
							value="maybe"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "maybe"}
						></input>
						unklar
					</Label>

					<Label theme="colorYes">
						<input
							type="radio"
							value="yes"
							name={`radiobutton[${playerNumber}]`}
							onChange={handleChange}
							checked={player.participate === "yes"}
						></input>
						bin dabei!
					</Label>
				</form>
			</>
		);
	}

	return (
		<>
			<NavBar />
			<Header datatransport={pageHeader} matchDay={UpcomingMatchday} />
			<Section>
				<UpcomingMatchday />

				<PlayerForm onSubmit={addParticipant} />

				<PlayerCount
					numberOfParticipants={calculatePlayerAttendance(participants)}
				/>
			</Section>
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
	h4 {
		padding-bottom: 10px;
	}
`;
const Section = styled.section`
	align-content: space-between;
	display: flex;
	flex-direction: column;
	height: 300px;
	justify-content: space-between;
`;
const theme = {
	colorNo: {
		default: "red",
		hover: "",
	},
	colorMaybe: {
		default: "gray",
		hover: "",
	},
	colorYes: {
		default: "green",
		hover: "",
	},
};

const Label = styled.label`
	background-color: ${(props) => theme[props.theme]};
	border-radius: 5px;
	&:hover {
		background-color: ${(props) => theme[props.theme].hover};
	}
`;
