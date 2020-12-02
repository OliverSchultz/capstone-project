export default function RegisterForm() {
	return (
		<form>
			<h3>register / create an account</h3>
			<input type="text" placeholder="enter a username here"></input>
			<input type="text" placeholder="enter a password"></input>
			<input type="text" placeholder="confirm password"></input>
			<button>finish</button>
			{/*Eingabefeld für username - username muss länger als 1 Zeichen sein - evtl.
			Überprüfung ob username bereits vergeben ist - Eingabefeld create Password
			- muss Bedingungen erfüllen - darf noch nicht vergeben sein - Eingabefeld
			Passwortbestätigung - Eingabefeld "confirm registration" - automatische
			Erweiterung der Teilnehmerliste in JoinNextMatch*/}
		</form>
	);
}
