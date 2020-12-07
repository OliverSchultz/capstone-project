import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyles";
import Navigation from "./Navigation";
import Header from "./Header";
import Home from "../Pages/Home";
import WelcomeLogin from "./WelcomeLogin";
import JoinNextMatch from "./JoinNextMatch";
//import PlayerCount from "./PlayerCount";

//import CreateAccount from "../Pages/CreateAccount";
import Beer from "../Pages/Beer";
//import MyProfile from "../Pages/MyProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
	const [numberOfParticipants, setNumberOfParticipants] = useState(0);
	return (
		<>
			<Router>
				<div>
					<GlobalStyle />
					<Navigation />
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/welcomeLogin" component={WelcomeLogin} />
						<Route path="/beer" component={Beer} />
						<Route path="/joinNextMatch" component={JoinNextMatch} />
					</Switch>
				</div>
			</Router>
		</>
	);
}
