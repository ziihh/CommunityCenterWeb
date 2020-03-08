import React, { Component } from "react";
import "../../css/footer.css";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import Footer from "../footer/footer";
import HeaderBody from "../headerBody";
import ScrollTopButton from "../topbutton/topButton";
import "../../css/galleri.css";
import FormPicture from "./new-picture-form";

class Galleri extends React.Component {
  state = {
    subImages: [],
    loading: true,
    categoriesIds: []
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    import("../../images/gallery-img/subimages.json").then(subImages => {
      var categoriesIds = [
        ...new Set(
          subImages.properties.map(item => {
            return item.category;
          })
        )
      ];

      this.setState({
        subImages: subImages.properties,
        loading: false,
        categoriesIds: categoriesIds
      });
    });
  }
  renderLoading() {
    return <p>Loading...</p>;
  }
  renderSubImages(cat) {
    var subcategoriesForCat = this.state.subImages.filter(
      el => el.category == cat
    );
    return subcategoriesForCat.map(sub => {
      return (
        <div className="galcontent" key={sub.subcategory}>
          <a href="/innergalleri" alt="link to subcategory">
            <div className="content-overlay" />
            <div className="content-image">
              <img src={require("../../images/" + sub.picture)} alt={sub.alt} />
            </div>
            <div className="content-details fadeIn-bottom">
              <h3 className="content-title">{sub.title}</h3>
            </div>
          </a>
        </div>
      );
    });
  }
  renderGallery() {
    //Renders the previous function renderSubImages and places them in their corresponding catergory.
    console.log("renderGallery", this.state.loading);
    return (
      <div>
        {this.state.categoriesIds.map(cat => (
          <div className="galcontainer" key={cat.category}>
            <h1 className="main-title">{cat}</h1>
            {this.renderSubImages(cat)}
          </div>
        ))}
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        <HeaderBody />
        <div className="galcontainer">
          <h1 className="main-title">Galleri kategorier</h1>
        </div>

        {this.state.loading ? this.renderLoading() : this.renderGallery()}
        {/* This asks "is gallery loaded?" If yes it then renders the gallery." 
			      Code for image overlay adapdet from https://codepen.io/ArnaudBalland/pen/vGZKLr*/}

        <div className="galcontainer">
          <a className="Upload-Picture" href="/FormPicture">
            Laste opp bilde
          </a>
        </div>
        <ScrollTopButton />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Galleri;
