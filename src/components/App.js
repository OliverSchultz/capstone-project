import GlobalStyle from "../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";
import WelcomeLogin from "./WelcomeLogin";
import JoinNextMatch from "./JoinNextMatch";
import PlayerCount from "./PlayerCount";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Header />
			<WelcomeLogin />
			<JoinNextMatch />
			<PlayerCount />
			<Footer />
		</div>
	);
}

export default App;
