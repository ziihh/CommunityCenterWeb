import React, { Component } from "react";
import "../../css/sommerfest.css";

import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import Footer from "../footer/footer";
import KommendeEvents from "../kommendeEvents/kommendeEvents";

import præstgarnbilde from "../../images/præstgarn.png";
import Citybilde from "../../images/city.jpg";
import denblindekulogo from "../../images/denblindekulogo.png";

class Sommerfest extends Component {
	render() {
		return (
			<div className="sommerfest">
				<HeaderBody />
				<div className="grid_img">
					<img
						className="eventimg"
						id="præstgarnimg"
						src={præstgarnbilde}
						alt="Bildet er av den blinde ku sin logo"
						width="70%"
					/>
				</div>
				<div className="grid_info">
					<div className="sommerfest_info">
						<h1 id="header1">Praktisk info om sommerfesten juli 2019</h1>
					</div>
					<p className="p_generelinfo">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
						nisl purus in mollis nunc. At augue eget arcu dictum varius duis.
						Maecenas volutpat blandit aliquam etiam erat velit scelerisque in
						dictum. Ultricies mi quis hendrerit dolor magna. Nisl pretium fusce
						id velit ut. Aliquam vestibulum morbi blandit cursus risus at. In
						fermentum et sollicitudin ac orci phasellus. Diam volutpat commodo
						sed egestas. Non enim praesent elementum facilisis.
					</p>
				</div>

				<div className="grid_midcontent">
					<div className="container_blindku">
						<div className="h2_tag">
							<h2>Den blinde ku</h2>

							<img
								className="denblindekulogo"
								src={denblindekulogo}
								alt="Bildet er av den blinde ku sin logo"
								width="25%"
							/>
							<p className="p_partnerinfo">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit
								amet nisl purus in mollis nunc. At augue eget arcu dictum varius
								duis. Maecenas volutpat blandit aliquam etiam erat velit
								scelerisque in dictum. Ultricies mi quis hendrerit dolor magna.
								Nisl pretium fusce id velit ut. Aliquam vestibulum morbi blandit
								cursus risus at. In fermentum et sollicitudin ac orci phasellus.
								Diam volutpat commodo sed egestas. Non enim praesent elementum
								facilisis.
							</p>
						</div>
					</div>

					<div className="container_buyticket">
						<div className="buy_ticket">
							<h2>
								<div id="tickets">Kjøp dine billetter</div>
							</h2>
						</div>

						<div className="container_form">
							<form action="/action_page.php" />
							<label for="fname">Fullt navn*</label>
							<input
								type="text"
								className="fnavn"
								name="fulltnavn"
								placeholder="Ola Nordmann"
							/>

							<label for="epost">E-post*</label>
							<input
								type="text"
								className="epost"
								name="epost"
								placeholder="Din e-postadresse"
							/>

							<label for="Telefonnummer">Telefonnummer*</label>
							<input
								type="text"
								className="emne"
								name="emne"
								placeholder="Telefonnummer"
							/>

							<label for="Antall voksne over 18 år *">
								Antall voksne over 18 år*
							</label>
							<select className="Antall_voksne">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
							</select>

							<label for="Antall voksne over 18 år *">
								Antall barn under 18 år*
							</label>
							<select className="Antall_voksne">
								<option value="0">0</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
							</select>
							<br />
							<input
								className="button_form"
								type="submit"
								value="Gå til kassen"
							/>
							<form />
							<br />
						</div>
					</div>
				</div>

				<KommendeEvents />

				<ScrollTopButton />
				<Footer />
			</div>
		);
	}
}

export default Sommerfest;
