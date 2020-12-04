// hier erscheinen die Teilnehmer in einer Liste

import { useState } from "react";

export default function PlayerForm({ onSubmit }) {
	const [player, setPlayer] = useState("player");
	const [participate, setParticipate] = useState(true);

	function onFormSubmit(event) {
		/*Das event on Submit wird übergeben */

		event.preventDefault();

		/*Bei der Übergabe des Events muss der default verhindert werden, der in der URL den get-Parameter hinzufügt und die Seite neu lädt */

		onSubmit({
			player: player,
			participate: true,
		});
	}

	/*die folgende Funktion sorgt für die Ausführung eines Events */

	function onPlayerChange(event) {
		setPlayer(event.target.value);
	}

	function onParticipateChange(event) {
		setParticipate(event.target.value);
	}
	return (
		<>
			<p>Hier erscheint eine Teilnehmerliste</p>
			<form onSubmit={onFormSubmit}>
				{/*hier kommt das onSubmit aus der function in Zeile 3*/}
				<input name="player" value={player} onChange={onPlayerChange} />
				<input
					name="participate"
					value={participate}
					onChange={onParticipateChange}
				/>
				<button type="submit">Speichern</button>
			</form>
		</>
	);
}
