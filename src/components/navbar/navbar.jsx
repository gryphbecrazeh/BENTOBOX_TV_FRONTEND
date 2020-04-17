import React from "react";
import { Link } from "react-router-dom";
let NavBar = () => {
	return (
		<nav>
			<Link to="/">
				<div className="navbar-link">Home</div>
			</Link>
			<Link to="/catalog">
				<div className="navbar-link">Catalog</div>
			</Link>
		</nav>
	);
};

export default NavBar;
