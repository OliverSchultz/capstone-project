import styled from "styled-components/macro";

const Header = () => (
	<HeaderStyled>
		<h1>Willkommen zu Freitags-Fussi</h1>
	</HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
	padding: 0.8rem;
	background-color: #a6dff5f2;
	margin: 0;
`;
