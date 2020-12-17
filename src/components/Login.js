import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";

export default function Login() {
	const pageHeader = "Login";

	return (
		<>
			<Header datatransport={pageHeader} />
			<FormStyled>
				<input type="text" placeholder="enter username"></input>
				<input type="text" placeholder="enter password"></input>
				<i>noch nicht registriert?</i>
				<Button name="register" />
			</FormStyled>
		</>
	);
}

const FormStyled = styled.form`
	margin: 2em;
	padding: 4.5em 2em 3.6em;
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	input {
		width: 100%;
		margin-bottom: 2em;
		padding: 0.7em 0;
		border: 0;
		border-bottom: 1px solid #d3d3d3;
	}
	input::placeholder {
		font-size: 1.2em;
		color: #d3d3d3;
	}
`;
