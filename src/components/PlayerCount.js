import { useState } from "react";

export default function PlayerCount() {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};
	return <p>Wir werden {increment} Spieler.</p>;
}

/*bei weniger als 6 Spielern möge die Spielerzahl rot angezeigt werden,
also ein toggle bei der bedingung count <6 */
