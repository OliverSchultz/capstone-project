import styled from "styled-components";
import Button from "./Button";

export default function Login() {
	return (
		<>
			<Form>
				<h3>pleaze, bebe, pleaze login</h3>
				<input type="text" placeholder="enter username"></input>
				<input type="text" placeholder="enter password"></input>
				<label>noch nicht registriert?</label>
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
