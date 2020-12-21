import styled from "styled-components/macro";

export default function Header({ datatransport, matchDay }) {
	return (
		<HeaderStyled>
			<h3>{datatransport}</h3>
			{matchDay && matchDay()}
		</HeaderStyled>
	);
}

const HeaderStyled = styled.header`
	background-image: linear-gradient(120deg, #e1f4fe 35%, #01a1fd 90%);
	box-shadow: 4px 4px 18px hsla(0, 0%, 0%, 0.3);
	border-radius: 20px;
	margin: 2em;
	padding: 1em;

	input {
		width: 100%;
		margin-bottom: 2em;
		padding: 0.7em 0;
		border: 0;
		border-bottom: 1px solid #d3d3d3;
	}
	input::placeholder {
		font-size: 1.2em;
		color: #d3d3d3;
	}

	h3 {
		margin: 0;
	}
`;
