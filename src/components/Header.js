import styled from "styled-components/macro";

const Header = () => (
	<h1>
		<HeaderStyled>Willkommen zu Freitags-Fussi (miau!)</HeaderStyled>
	</h1>
);
export default Header;

const HeaderStyled = styled.header`
	color: blue;
	background-color: lightslategray;
`;
