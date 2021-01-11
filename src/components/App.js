import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyles";

import JoinNextMatch from "./JoinNextMatch";
import Home from "../Pages/Home";
import ChooseColor from "../Pages/ChooseColour";
import Beer from "../Pages/Beer";

export default function App() {
	return (
		<>
			<Router>
				<div>
					<GlobalStyle />

					<Switch>
						<Route exact path="/" component={Home} />
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
