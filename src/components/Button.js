import styled from "styled-components/macro";

export default function Button(props) {
	return <ButtonStyled>{props.name}</ButtonStyled>;
}
// export default function Button({name}) {
// 	// props --> { name: "username" }
// 	// Destructuring assignment --> {name} = {name: "username"}
// 	return <ButtonStyled onClick>{name}</ButtonStyled>;
// }
const ButtonStyled = styled.button`
	background-color: #b4d4e0;
	border: 2px solid black;
	border-radius: 10px;
	box-shadow: 0px, 10px, 5px, lightgray;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	outline: 0;
	padding: 0.8em;
	transition: ease background-color 500ms;
	&:hover {
		background-color: yellowgreen;
	}
`;
