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
import generateTeams from "../components/TeamGenerator";
export default function ChooseColor() {
	const upcomingMatchday = upcomingMatchdayToISOString();
	const [participants, setParticipants] = useState([]);
	const [teamA, setTeamA] = useState([]);
	const [teamB, setTeamB] = useState([]);
	useEffect(() => {
		setParticipants(
			loadLocally(upcomingMatchday).filter(
				(participant) => participant.participate === "yes"
			)
		);
	}, []);
	useEffect(() => {
		const [teamA, teamB] = generateTeams(participants);
		setTeamA(teamA);
		setTeamB(teamB);
	}, [participants]);
	useEffect(() => {
		saveLocally(upcomingMatchday, participants);
	}, [participants, upcomingMatchday]);
	const pageHeader = "Wähle deine Trikotfarbe für das Match am ";
	function saveJerseyColorToParticipant(playerNumber, color) {
		const participantsUpdated = participants.map((participant, index) => {
			if (playerNumber === index) {
				participant.color = color;
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
				{participants.map((player, index) => {
					const playerColor = player.color !== "" ? player.color : "#ffffff";
					return (
						<li key={index}>
							<Jersey color={playerColor} />
							{player.player}
							<ColorPicker
								color={playerColor}
								updateColor={(color) =>
									saveJerseyColorToParticipant(index, color)
								}
							/>
						</li>
					);
				})}
			</Ul>
			<Section>
				<h3>Zufällige Teams</h3>
				<ol>
					<h4>Team A</h4>
					{teamA.map((teamMember, index) => (
						<li>{teamMember.player}</li>
					))}
				</ol>
				<ol>
					<h4>Team B</h4>
					{teamB.map((teamMember, index) => (
						<li>{teamMember.player}</li>
					))}
				</ol>
			</Section>
		</>
	);
}
const Ul = styled.ul`
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-items: center;
	justify-content: center;
	li {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
const Jersey = styled(JerseyIcon)`
	background-color: #fff;
	fill: ${(props) => [props.color]};
	width: 40%;
	height: 40%;
	border-radius: 50%;
`;
const Section = styled.section`
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
`;
