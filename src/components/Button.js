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
	background-color: lightslategray;
	margin-top: 3em;
	margin-left: 5em;
	margin-right: 5em;
	margin-bottom: 0;
	padding: 2em;
	border: 1em;
`;
