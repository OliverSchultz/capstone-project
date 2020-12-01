import styled from "styled-components";
import Button from "./Button";

export default function Body() {
	return (
		<>
			<Form>
				<Button name="username" />
				<Button name="password" />
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
