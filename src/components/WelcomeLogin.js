import styled from "styled-components";
import Button from "./Button";
import Header from "./Header";

export default function Login() {
	const pageHeader = "Willkommen zum Freitagsfußball";
	return (
		<>
			<Header datatransport={pageHeader} />
			<Form>
				<label>
					pleaze, bebe, pleaze login
					<input type="text" placeholder="enter username"></input>
				</label>
				<input type="text" placeholder="enter password"></input>
				<i>noch nicht registriert?</i>
				<Button name="register" />
			</Form>
		</>
	);
}

const Form = styled.form`
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;
