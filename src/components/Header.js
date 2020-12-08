import styled from "styled-components/macro";

export default function Header(props) {
	return (
		<HeaderStyled>
			<h2>{props.datatransport}</h2>
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background-color: #018ada;
	border-radius: 10px;
	box-shadow: 5px 5px lightblue;
	padding: 5px;
	margin: 0;

	h2 {
		margin: 0;
	}
`;
