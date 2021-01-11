import fatPlayer from "../pictures/dick.jpeg";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Header from "../components/Header";
import Button from "../components/Button";

export default function Home() {
	const Headername = "Grosny: die Freitagsfusi-Orga-App";
	return (
		<div>
			<Header datatransport={Headername} />
			<h4>Athleten, willkommen zurück nach Goofy19-Pause</h4>

			<Img src={fatPlayer} alt="fat players" width="100%"></Img>
			<NavBox>
				<Link to="/JoinNextMatch">
					<Button name="Anmelden">Kick Off!</Button>
				</Link>
			</NavBox>
		</div>
	);
}
const NavBox = styled.nav`
	align-content: center;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	padding: 5px;
	margin: 0;
`;

const Img = styled.img`
	margin-top: 35px;
	margin-bottom: 35px;
`;
