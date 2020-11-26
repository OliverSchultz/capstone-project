import styled from "styled-components/macro";

export default function Button(props) {
	return <ButtonStyled onClick>{props.name}</ButtonStyled>;
}
const ButtonStyled = styled.div`
	background-color: lightslategray;
	margin-top: 3em;
	margin-left: 5em;
	margin-right: 5em;
	margin-bottom: 0;
	padding: 2em;
	border: 1em;
`;
