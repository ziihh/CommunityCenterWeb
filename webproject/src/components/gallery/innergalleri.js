import React, { Component } from "react";
import "../../css/footer.css";
import Footer from "../footer/footer";
import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import Images from "../../gallery-image";
import Toggle from "./toggle";
import "../../css/galleri.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

class Innergalleri extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			activeItem: ""
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal(item) {
		this.setState({
			showModal: true,
			activeItem: item
		});
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}
	render() {
		return (
			<div>
				<HeaderBody />
				<div className="galcontainer">
					{Images.properties.map(x => (
						<div key={x.index} className="galcontent">
							<div className="content-overlay" />
							<div className="content-image">
								<img src={x.picture} alt={x.alt} />{" "}
							</div>
							<div
								className="content-details fadeIn-bottom"
								onClick={() => this.handleOpenModal(x)}
							>
								<h3 className="content-title">{x.title}</h3>
							</div>
						</div>
					))}
				</div>
				{Images.properties.map(x => (
					<Modal
					key={this.state.activeItem.index}
						isOpen={this.state.showModal}
						contentLabel="onRequestClose"
						onRequestClose={this.handleCloseModal}
						className="Modal"
						overlayClassName="MOverlay"
					>
						<span className="close-cursor" onClick={this.handleCloseModal}>
							&times;
						</span>
						<div>
							<img
								src={this.state.activeItem.picture}
								alt={this.state.activeItem.alt}
							/>
							<h3 className="content-title">{this.state.activeItem.title}</h3>
							<p className="content-text">
								{this.state.activeItem.description}
							</p>
						</div>
					</Modal>
				))}

				<div className="galcontainer">
					<a className="Upload-Picture" href="/FormPicture">
						Laste opp bilde
					</a>
					<img src={this.picture} />
				</div>
				<ScrollTopButton />
				<Footer />
			</div>
		);
	}
}

export default Innergalleri;
