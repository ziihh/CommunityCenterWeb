import React, { Component } from "react";
import logo from "../../../images/logo.png";
import "../../../css/backOfficeCSS/componentsTables.css";
import TimeLineTables from "./tables/timeLineTables";
import HomePageAboutUs from "./tables/homePageAboutUs";
import PartnerTables from "./tables/partnerTables";
import FooterTables from "./tables/footerTables";
import EventTables from "./tables/eventTables";
import { withRouter } from "react-router-dom";
import { postData, getData } from "../../../sendAPIRequest";
import Login from "../login";

class ComponentTables extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      render: " ",
      formType: "add",
      redirect: false
    };
  }

  handleClick(compName, e) {
    this.setState({ render: compName });
  }

  componentDidMount() {
    getData("authenticated").then(res => {
      if (res.authenticated == false) {
        this.setState({ redirect: true });
      }
    });

    var url = new URL(window.location.href);
    var deleteStoryId = url.searchParams.get("deleteTimeLineId");
    var updateStoryId = url.searchParams.get("updateTimeLineId");
    if (
      deleteStoryId != null &&
      window.confirm(
        "Are you sure you want to delete story id " + deleteStoryId + "?"
      )
    ) {
      postData(
        {
          storyId: deleteStoryId
        },
        "deleteStory"
      );
    } else if (
      updateStoryId != null &&
      window.confirm(
        "Are you sure you want to update story id " + updateStoryId + "?"
      )
    ) {
      var DBResult = getData("getStory", "storyId=" + updateStoryId).then(
        result => {
          if (result.statusCode == 200) {
            return result.data;
          }
        }
      );
      DBResult.then(res => {});
      this.setState({
        data: DBResult,
        render: "TimeLineTables",
        formType: "update"
      });
    }
  }

  /**
   * Handles the exit of subcomponents.
   */
  renderSubComponents() {
    switch (this.state.render) {
      case "HomePageAboutUs":
        var editHomePageAboutUs = document.getElementById(
          "editHomePageAboutUs"
        );
        if (
          editHomePageAboutUs != null &&
          editHomePageAboutUs.style.display == "none"
        ) {
          editHomePageAboutUs.style.display = "block";
        }
        return <HomePageAboutUs />;
      case "TimeLineTables":
        var editTimeLines = document.getElementById("editTimeLines");
        if (editTimeLines != null && editTimeLines.style.display == "none") {
          editTimeLines.style.display = "grid";
        }
        return (
          <TimeLineTables
            formType={this.state.formType}
            data={this.state.data}
            history={this.props.history}
          />
        );
      case "EventTables":
        return <EventTables />;

      case "PartnerTables":
        return <PartnerTables />;

      case "FooterTables":
        return <FooterTables />;
    }
  }
  render() {
    if (this.state.redirect) {
      return <Login />;
    }

    return (
      <div className="backOffice">
        <div className="logo-header">
          <img src={logo} className="logo" />
        </div>
        <div className="topBar">
          <h1 id="backOfficeHeading">Components</h1>
          <hr />
          <div className="componentsButtons">
            <button
              className="homeBttn"
              onClick={this.handleClick.bind(this, "HomePageAboutUs")}
            >
              Home
            </button>
            <button
              className="homeBttn"
              onClick={this.handleClick.bind(this, "EventTables")}
            >
              Arrangement
            </button>
            <button
              className="homeBttn"
              onClick={this.handleClick.bind(this, "TimeLineTables")}
            >
              Tidslinje
            </button>
            <button
              className="homeBttn"
              onCLick={this.handleClick.bind(this, "GalleryTables")}
            >
              Gallery
            </button>
            <button
              className="homeBttn"
              onClick={this.handleClick.bind(this, "PartnerTables")}
            >
              Partner
            </button>

            <button
              className="homeBttn"
              onClick={this.handleClick.bind(this, "FooterTables")}
            >
              Footer kontaktinfo
            </button>
            <button className="homeBttn">Kontakt</button>
            <button className="homeBttn">Ny bruker</button>
          </div>
        </div>

        {this.renderSubComponents()}
      </div>
    );
  }
}

export default withRouter(ComponentTables);
