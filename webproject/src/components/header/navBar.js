import React from "react";
import "../../css/navBar.css";
import { Link, NavLink } from "react-router-dom";

class NavBar extends React.Component {
	myFunction = () => {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	};

	render() {
		return (
			<div className="topnav" id="myTopnav">
				<ul>
					<li>
						<Link to="/" className="active">
							Hjem
						</Link>
					</li>
					<li>
						<Link to="/Arrangementer">Arrangementer</Link>
					</li>
					<li>
						<Link to="/Utleie">Utleie</Link>
					</li>
					<li>
						<Link to="/TimeLine">Tidslinje</Link>
					</li>
					<li>
						<Link to="/Galleri">Galleri</Link>
					</li>
					<li>
						<Link to="/Kontakt">Kontakt</Link>
					</li>
					<a
						href="javascript:void(0);"
						className="icon"
						onClick={this.myFunction}
					>
						<i className="fa fa-bars" />
					</a>
				</ul>
			</div>
		);
	}
}

export default NavBar;
