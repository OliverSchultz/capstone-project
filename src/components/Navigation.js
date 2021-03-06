import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<StyledNavigation>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/joinNextMatch">Anmelden</Link>
					</li>
					<li>
						<Link to="/chooseColour">Trikotwahl</Link>
					</li>
					<li>
						<Link to="/beer">Bier</Link>
					</li>
				</ul>
			</StyledNavigation>
		</>
	);
}
const StyledNavigation = styled.nav`
	bottom: 0px;
	margin-left: 2em;
	margin-right: 2em;

	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 0;
		padding: 0.5em;
		box-shadow: 4px 4px 10px hsla(0, 0%, 0%, 0.3);
		border-radius: 5px;
	}
	a {
		text-decoration: none;
	}
	a:visited {
		color: black;
	}
`;
