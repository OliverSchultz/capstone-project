import styled from "styled-components/macro";

const Header = () => (
	<HeaderStyled>
		<h1>Willkommen zur Pampelmuse</h1>
	</HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	background-color: wheat;
	padding: 0.8rem;
	margin: 0;
`;
