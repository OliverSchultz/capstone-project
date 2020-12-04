import Header from "../components/Header";

export default function CreateAccount() {
	const pageHeader = "Pampelmuse != Pomelo, loco";
	return (
		<>
			<Header datatransport={pageHeader} />
			<h3>Create an Account</h3>
			<input placeholder="select username"></input>
			<input placeholder="create password"></input>
			<input placeholder="confirm password"></input>
			<button type="submit">registrierung abschließen</button>
		</>
	);
}
