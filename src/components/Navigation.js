import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<>
			<StyledNavigation>
				<ul>
					<Link to="/home">
						<li>Home</li>
					</Link>
					<Link to="/login">
						<li>Login New</li>
					</Link>
					<Link to="/welcomeLogin">
						<li>Login</li>
					</Link>
					<Link to="/joinNextMatch">
						<li>next match</li>
					</Link>

					<Link to="/beer">
						<li>Beer</li>
					</Link>
					<Link to="/chooseColour">
						<li>Trikotwahl</li>
					</Link>
				</ul>
			</StyledNavigation>
		</>
	);
}
const StyledNavigation = styled.nav`
	bottom: 0px;
	padding: 1em;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
	}

	li {
		background-color: whitesmoke;
		padding: 4px;
		border-radius: 5px;
	}
`;
