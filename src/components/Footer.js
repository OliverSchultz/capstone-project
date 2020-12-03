/* der Footer braucht eine clickable Navigation, in der das aktuelle Tab markiert sein muss. 
Geil wäre die Anzeige der 4 wichtigsten Tabs und die Möglichkeit, über "..." weitere Tabs zu sehen (utopisch)*/
import styled from "styled-components/macro";

export default function Footer() {
	return (
		<footer>
			<FooterNavigation>
				<ul>
					<li>Back</li>
					<li>Home</li>
					<li>
						<a href="/profile">myProfile</a>
					</li>
					<li>Logout</li>
				</ul>
			</FooterNavigation>
		</footer>
	);
}
const FooterNavigation = styled.nav`
	padding: 1em;
	width: 100%;
	bottom: 0px;

	ul {
		margin: 0;
		padding: 0;
		display: inline;
		list-style-type: none;
	}
`;
