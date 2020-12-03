/*ich brauche verschiedene Buttons: back, login, register, etc*/

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
	display: flex;
	flex-direction: column;
	background-color: #b4d4e0;
	padding: 1em;
	border: 2px solid black;
	border-radius: 10px;
`;
