import styled from "styled-components/macro";
import Button from "./Button";

export default function Body() {
	return (
		<BodyStyled>
			<h2>Hier könnte keine Werbung stehen</h2>
			<Button />
			<Button />
			<Button />
		</BodyStyled>
	);
}
const BodyStyled = styled.body`
	background-color: lightgray;
`;
