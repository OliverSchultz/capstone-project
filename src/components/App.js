import GlobalStyle from "../styles/GlobalStyles";
import Navigation from "./Navigation";
import Home from "../Pages/Home";
import WelcomeLogin from "./WelcomeLogin";
import JoinNextMatch from "./JoinNextMatch";
import Login from "./Login";
//import CreateAccount from "../Pages/CreateAccount";
import Beer from "../Pages/Beer";
//import MyProfile from "../Pages/MyProfile";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CirclePicker from "./ColorPicker";

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
						<Route path="/ChooseColor" component={CirclePicker} />
					</Switch>
				</div>
			</Router>
		</>
	);
}
