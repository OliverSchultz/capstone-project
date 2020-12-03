import styled from "styled-components/macro";

const Header = () => (
	<HeaderStyled>
		<h1>Willkommen zur Pampelmuse</h1>
	</HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
	padding: 0.8rem;
	margin: 0;
`;
