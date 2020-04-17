import React from "react";
import "./App.scss";
import NavBar from "./components/navbar/navbar";
import Catalog from "./components/catalog/catalog";
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<NavBar />
			</header>
			<Catalog />
		</div>
	);
}

export default App;
