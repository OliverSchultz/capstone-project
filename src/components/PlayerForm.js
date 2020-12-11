import { useState } from "react";

export default function PlayerForm({ onSubmit }) {
	const [player, setPlayer] = useState("");

	function onFormSubmit(event) {
		/*Das event on Submit wird übergeben */

		event.preventDefault();

		/*Bei der Übergabe des Events muss der default verhindert werden, der in der URL den get-Parameter hinzufügt und die Seite neu lädt */

		// Elternelement wird über den neuen Partizipanten informiert
		onSubmit({
			player: player,
			participate: true,
		});

		// Nach dem Absenden den Namen aus dem State und damit auch aus dem Eingabefeld löschen
		setPlayer("");
	}
	/*die folgende Funktion sorgt für die Ausführung eines Events */

	function onPlayerChange(event) {
		setPlayer(event.target.value);
	}

	return (
		<>
			<p>Hier erscheint eine Teilnehmerliste</p>
			<form onSubmit={onFormSubmit}>
				{/*hier kommt das onSubmit aus der function in Zeile 3*/}
				<input name="player" value={player} onChange={onPlayerChange} />
				<button type="submit">Speichern</button>
			</form>
		</>
	);
}
