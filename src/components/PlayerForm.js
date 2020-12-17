import { useState } from "react";
import Button from "./Button";
import styled from "styled-components/macro";

export default function PlayerForm({ onSubmit }) {
	const [player, setPlayer] = useState("");

	function onFormSubmit(event) {
		/*Das event on Submit wird übergeben */

		event.preventDefault();

		/*Bei der Übergabe des Events muss der default verhindert werden, der in der URL den get-Parameter hinzufügt und die Seite neu lädt */

		// Elternelement wird über den neuen Partizipanten informiert
		onSubmit({
			player: player,
			participate: "maybe",
			color: "",
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
			<p>Bitte trag dich für den nächsten Termin hier ein:</p>
			<Form onSubmit={onFormSubmit}>
				{/*hier kommt das onSubmit aus der function in Zeile 3*/}
				<Input name="player" value={player} onChange={onPlayerChange}></Input>
				<Button name="Speichern" />
			</Form>
		</>
	);
}
const Form = styled.form`
	align-items: center;
	justify-content: space-between;
	height: 80px;
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	padding: 5px 30px;
`;
