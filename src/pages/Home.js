import fatPlayer from "../pictures/Welcome.jpeg";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export default function Home() {
	return (
		<div>
			<h3>the day after covid</h3>
			<img src={fatPlayer} alt="fat players" width="400" />
			<NavBox>
				<Link to="/login">
					<button name="Login">Log In</button>
				</Link>
				<Link to="/register">
					<button name="Register">register</button>
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
	padding: 20px;
	margin: 0;
`;
