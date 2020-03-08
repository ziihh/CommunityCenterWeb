import React, { Component } from "react";
import Header from "./header/header.js";
import NavBar from "./header/navBar.js";

class HeaderBody extends Component {
	render() {
		return (
			<div className="header">
				<Header />
				<NavBar />
			</div>
		);
	}
}

export default HeaderBody;
