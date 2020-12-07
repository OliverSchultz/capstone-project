export default function PlayerCount({ numberOfParticipants }) {
	return <p>Wir werden {numberOfParticipants} Spieler.</p>;
}

/*bei weniger als 6 Spielern möge die Spielerzahl rot angezeigt werden,
also ein toggle bei der bedingung count <6 */
