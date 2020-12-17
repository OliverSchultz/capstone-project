import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";
import UpcomingMatchday, {
	upcomingMatchdayToISOString,
} from "../components/Date";
import loadLocally from "../components/lib/loadLocally";
import { useState, useEffect } from "react";
import saveLocally from "../components/lib/saveLocally";
import styled from "styled-components";
import { ReactComponent as BeerIcon } from "../pictures/beer_2.svg";
import NavBar from "../components/Navigation";

export default function Beer() {
	const upcomingMatchday = upcomingMatchdayToISOString();

	const [participants, setParticipants] = useState(
		loadLocally(upcomingMatchday) || []
	);

	useEffect(() => {
		saveLocally(upcomingMatchday, participants);
	}, [participants, upcomingMatchday]);

	const pageHeader = "Getränkeversorgung am:";

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

			<Ol>
				{playersAttending.map((player, index) => {
					return (
						<li key={index}>
							{player.player}
							<input type="checkbox" width="500"></input>
							<BeerGlas />
						</li>
					);
				})}
			</Ol>
		</>
	);
}

const Ol = styled.ol`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
`;
const BeerGlas = styled(BeerIcon)`
	background-color: transparent;
	fill: ${(props) => [props.color]};
	height: 2em;
	padding-bottom: 8px;
	width: 2em;
`;
