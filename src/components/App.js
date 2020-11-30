import GlobalStyle from "../styles/GlobalStyles";
import Footer from "./Footer";
import Header from "./Header";
import WelcomeLogin from "./WelcomeLogin";
import JoinNextMatch from "./JoinNextMatch";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<WelcomeLogin />
			<JoinNextMatch />
			<Footer />
		</div>
	);
}

export default App;
