import styled from "styled-components/macro";

const Header = (props) => (
	<HeaderStyled>
		<h2> {props.datatransport}</h2>
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
