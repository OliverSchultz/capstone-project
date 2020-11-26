import styled from "styled-components/macro";

export default function Footer() {
	return <FooterStyled>"Bienvenido mundo"</FooterStyled>;
}
const FooterStyled = styled.footer`
	color: blue;
	background-color: lightslategray;
	margin-top: 10em;
`;
