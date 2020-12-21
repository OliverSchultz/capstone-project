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
							<label htmlFor="beer">{player.player}</label>
							<input type="checkbox" width="500" id="beer" />
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
	flex-direction: column;
	height: 80%;
	align-items: space-between;
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	li {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		grid-gap: 0.5em;
		align-items: center;
	}
	input {
		appearance: none;
		background-color: #2e9ddb;
		border-radius: 5px;
		cursor: pointer;
		height: 22px;
		width: 22px;
	}
	label {
		font-weight: bold;
	}
`;
const BeerGlas = styled(BeerIcon)`
	background-color: transparent;
	fill: ${(props) => [props.color]};
	height: 2em;
	width: 2em;
`;
