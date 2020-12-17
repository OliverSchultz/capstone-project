import styled from "styled-components/macro";

export default function Button({ name, onClick }) {
	return <ButtonStyled onClick={onClick}>{name}</ButtonStyled>;
}
// export default function Button({name}) {
// 	// props --> { name: "username" }
// 	// Destructuring assignment --> {name} = {name: "username"}
// 	return <ButtonStyled onClick>{name}</ButtonStyled>;
// }
const ButtonStyled = styled.button`
	background-color: #06d6a0;
	border: 2px solid #05ad82;
	border-radius: 10px;
	box-shadow: 0px, 10px, 5px, lightgray;
	color: white;
	cursor: pointer;
	outline: 0;
	padding: 10px 25px 10px 25px;
	text-transform: uppercase;
	transition: ease background-color 500ms;
	&:hover {
		background-color: #05ad82;
	}
`;
