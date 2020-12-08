import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";

export default function Login() {
	const pageHeader = "Willkommen zum Freitagsfußball";

	return (
		<>
			<Header datatransport={pageHeader} />
			<Form>
				<label>pleaze, bebe, pleaze login</label>
				<Input type="text" placeholder="enter username"></Input>
				<Input type="text" placeholder="enter password"></Input>
				<i>noch nicht registriert?</i>
				<Button name="register" />
			</Form>
		</>
	);
}

const Form = styled.form`
	height: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const Input = styled.input`
	padding: 10px;
	border: darkgray;
	border-radius: 2px;
`;
