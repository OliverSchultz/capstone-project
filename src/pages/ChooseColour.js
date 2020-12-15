import Header from "../components/Header";
import ColorPicker from "../components/ColorPicker";
import UpcomingMatchday, {
	upcomingMatchdayToISOString,
} from "../components/Date";
import loadLocally from "../components/lib/loadLocally";
import { useState, useEffect } from "react";
import saveLocally from "../components/lib/saveLocally";

export default function ChooseColor() {
	const upcomingMatchday = upcomingMatchdayToISOString();

	const [participants, setParticipants] = useState(
		loadLocally(upcomingMatchday) || []
	);

	const [color, setColor] = useState("#fff");

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
			<Header datatransport={pageHeader} />
			<UpcomingMatchday />
			<ul>
				{playersAttending.map((player, index) => {
					const playerColor = player.color !== "" ? player.color : "#ffffff";
					return (
						<li key={index}>
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
			</ul>
		</>
	);
}
