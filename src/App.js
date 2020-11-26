import "./App.css";
import GlobalStyle from "./styles/GlobalStyles";
import Body from "./components/Body";
// import MyProfile from "./pages/MyProfile";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Body />
			<Footer />
		</div>
	);
}

export default App;
