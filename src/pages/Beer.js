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

	const [bringsBeer, setBringsBeer] = useState(false);
	console.log(bringsBeer);

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
							<ToggleButton bringsBring={bringsBeer}>
								<input
									type="checkbox"
									width="500"
									id="beer"
									onClick={() => console.log("click")}
								/>
								<span></span>
							</ToggleButton>
							<BeerGlas />
						</li>
					);
				})}
			</Ol>
		</>
	);
}

const ToggleButton = styled.div`
	position: relative;
	width: 70px;
	height: 34px;

	input {
		opacity: 0;
	}
	span {
		position: absolute;
		cursor: pointer;
		border-radius: 34px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: white;
		transition: 0.4s;
	}
	span:before {
		border-radius: 50px;
		background-color: ${(props) => (props.bringsBeer ? "#76a1b8" : "hotpink")};
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		transition: 0.4s;
		transform: ${(props) => (props.bringsBeer ? "translateX(35px)" : "")};
	}

	input:checked + span {
		background-color: blue;
	}
	input:checked + span:before {
		transform: translateX(35px);
	}
`;

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
		align-items: center;
		display: grid;
		flex: 1;
		grid-template-columns: 2fr 1fr 1fr;
		grid-gap: 0.5em;

		padding-bottom: 5px;
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
