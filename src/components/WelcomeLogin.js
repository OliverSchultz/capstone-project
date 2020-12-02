import styled from "styled-components";
import Button from "./Button";

export default function Login() {
	return (
		<>
			<Form>
				<input type="text" placeholder="please enter your username" />
				<Button name="enter" />
				<input type="text" placeholder="please enter your password" />
				<Button name="enter" />
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
