import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";

import Navigation from "./Navigation";
import WelcomeLogin from "./WelcomeLogin";
import JoinNextMatch from "./JoinNextMatch";
import Login from "./Login";

import Home from "../Pages/Home";
import ChooseColor from "../Pages/ChooseColour";
import Beer from "../Pages/Beer";

export default function App() {
	return (
		<>
			<Router>
				<div>
					<GlobalStyle />
					<Navigation />
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/welcomeLogin" component={WelcomeLogin} />
						<Route path="/beer">
							<Beer icon="🍺" />
						</Route>
						<Route path="/joinNextMatch" component={JoinNextMatch} />
						<Route path="/chooseColour" component={ChooseColor} />
					</Switch>
				</div>
			</Router>
		</>
	);
}
