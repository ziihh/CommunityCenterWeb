import React, { Component } from "react";
import "../../css/footer.css";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import Footer from "../footer/footer";
import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import Images from "../../gallery-image";
import "../../css/galleri.css";


class FormPicture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picturedata: "",
      titel: "hey",
      fotograf: "",
      info: "",
      date: "",
      filter: "",
      file: null
    };
      }
      handleSubmit = (event) => {
        event.preventDefault()
      }
      handleInputChange = (event) => {

        this.setState({
          [event.target.name]:event.target.value
        })
      }
	render() {
    const {title}=this.state
    const {fotograf}=this.state
    const {info}=this.state
    const {dato}=this.state
    const {file}=this.state
		return (
		<div>
  	<HeaderBody />
    <div className="formContainer">
    <h1 className="main-title">Legg til nytt bilde</h1>
    <form onSubmit={this.handleSubmit} >
    <div className="uploadimg">
    <input accept="image/jpeg, image/png" type="file" onChange={this.handleInputChange}/>
    </div>
    <h2>Titel</h2>
<input type ="text" placeholder="Titel" name="titel" onChange={this.handleInputChange}/>
<h2>Fotograf</h2>
<input type ="text" placeholder="Fotograf" name="fotograf" onChange={this.handleInputChange}/>
<h2>Beskrivelse av bilde</h2>
<input type ="text" placeholder="Mer informasjon om bildet, Hvordan er bilde relevant?" name="info" onChange={this.handleInputChange}/>
<h2>Dato</h2>
<input className="Dato" type="date" placeholder="Dato bilde ble tatt" onChange={this.handleInputChange}/>
<h2>Filter</h2>
<select name="category list">
  <option value="Prestgarden-bilde">Prestgarden bilde</option>
  <option value="Familie-bilde">Familie bilde</option>
  <option value="Prest">Bilde av tidligere prest</option>
  <option value="Arrangement">Arrangement</option>
</select>
<p>Det kan ta opp til 24 times før bilde blir lagt ut, det blir først sett på av en administrator.</p>
<input type="submit" value="Submit" name='submit' />
    </form>
    </div>
    <ScrollTopButton />
    <Footer />
    </div>
		);
	}
}

export default FormPicture;
