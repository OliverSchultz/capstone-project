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
	display: flex;
	background-color: #a6dff5f2;
	position: fixed;
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
