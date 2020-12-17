import styled from "styled-components";
import { useState, useEffect } from "react";

import NavBar from "../components/Navigation";
import Header from "../components/Header";

import CalculateFriday from "../components/Date";
import UpcomingMatchday, {
	upcomingMatchdayToISOString,
} from "../components/Date";
import loadLocally from "../components/lib/loadLocally";
import saveLocally from "../components/lib/saveLocally";

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

	setParticipants(playersAttending);

	return (
		<>
			<NavBar />
			<Header datatransport={pageHeader} matchDay={UpcomingMatchday} />

			<Ul>
				{playersAttending.map((player, index) => {
					return (
						<>
							<NavBar />
							<CalculateFriday />
							<p>add here: bring beer</p>
							<p>Mr. Ngyuen </p>
							<li key={index}>{player.player}</li>
						</>
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
