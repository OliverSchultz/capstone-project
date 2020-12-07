import Header from "../components/Header";
import styled from "styled-components/macro";

export default function CreateAccount() {
	const pageHeader = "Create an Account";
	return (
		<>
			<Header datatransport={pageHeader} />
			<FormStyled>
				<input placeholder="select username"></input>
				<input placeholder="create password"></input>
				<input placeholder="confirm password"></input>
				<button type="submit">Registrierung abschließen</button>
			</FormStyled>
		</>
	);
}

const FormStyled = styled.form`
	height: 200px;
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin-top: 2em;
	margin-bottom: 2em;
`;
