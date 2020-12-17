import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";
import UpcomingMatchday, {
	upcomingMatchdayToISOString,
} from "../components/Date";
import loadLocally from "../components/lib/loadLocally";
import { useState, useEffect } from "react";
import saveLocally from "../components/lib/saveLocally";
import styled from "styled-components";
import { ReactComponent as JerseyIcon } from "../pictures/football-jersey.svg";
import NavBar from "../components/Navigation";

export default function ChooseColor() {
	const upcomingMatchday = upcomingMatchdayToISOString();

	const [participants, setParticipants] = useState(
		loadLocally(upcomingMatchday) || []
	);

	useEffect(() => {
		saveLocally(upcomingMatchday, participants);
	}, [participants, upcomingMatchday]);

	const pageHeader = "Wähle deine Trikotfarbe für das Match am:";

	const playersAttending = participants.filter(
		(participant) => participant.participate === "yes"
	);
	function saveJerseyColorToParticipant(playerNumber, color) {
		const participantsUpdated = participants.map((participant, index) => {
			if (playerNumber === index) {
				participant.color = color;
				console.log(participant);
			}
			return participant;
		});
		setParticipants(participantsUpdated);
	}

	return (
		<>
			<NavBar />
			<Header datatransport={pageHeader} matchDay={UpcomingMatchday} />

			<Ul>
				{playersAttending.map((player, index) => {
					const playerColor = player.color !== "" ? player.color : "#ffffff";
					return (
						<li key={index}>
							<ColorPicker
								color={playerColor}
								updateColor={(color) =>
									saveJerseyColorToParticipant(index, color)
								}
							/>
							{player.player}
							<Jersey color={playerColor} />
						</li>
					);
				})}
			</Ul>
		</>
	);
}

const Ul = styled.ul`
	padding: 50px 0px 0px 0px;
	li {
		align-items: center;
		display: flex;
		justify-content: space-around;
		list-style-type: none;
	}
`;
const Jersey = styled(JerseyIcon)`
	background-color: #fff;
	fill: ${(props) => [props.color]};
	width: 10%;
	height: 10%;
`;
