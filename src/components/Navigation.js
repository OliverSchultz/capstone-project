/* der Footer braucht eine clickable Navigation, in der das aktuelle Tab markiert sein muss. 
Geil wäre die Anzeige der 4 wichtigsten Tabs und die Möglichkeit, über "..." weitere Tabs zu sehen (utopisch)*/
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
					<Link to="/back">
						<li>back</li>
					</Link>
					<Link to="/welcomeLogin">
						<li>Login</li>
					</Link>
					<Link to="/joinNextMatch">
						<li>next match</li>
					</Link>
					<Link to="/myProfile">
						<li>my Profile</li>
					</Link>
					<Link to="/beer">
						<li>Beer</li>
					</Link>
					<Link to="/logout">
						<li>logout</li>
					</Link>
				</ul>
			</StyledNavigation>
		</>
	);
}
const StyledNavigation = styled.nav`
	padding: 1em;
	width: 100%;
	bottom: 0px;

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		list-style-type: none;
	}

	li {
		background-color: whitesmoke;
		padding: 4px;
		border-radius: 5px;
	}
`;
