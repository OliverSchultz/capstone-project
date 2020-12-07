import styled from "styled-components/macro";

const Header = (props) => (
	<HeaderStyled>
		<h2> {props.datatransport}</h2>
	</HeaderStyled>
);
export default Header;

const HeaderStyled = styled.header`
	background-color: #018ada;
	border-radius: 10px;
	box-shadow: 10px 10px lightgrey;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 0.8rem;
	margin-left: 2rem;
	margin-right: 2rem;
`;
