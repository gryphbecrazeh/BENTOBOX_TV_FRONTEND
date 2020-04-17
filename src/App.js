import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import Catalog from "./components/catalog/catalog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<NavBar />
				</header>
				<Switch>
					<Route path="/catalog">
						<Catalog />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
