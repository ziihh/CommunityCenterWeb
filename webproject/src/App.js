import React, { Component } from "react";
import "./App.css";
import HomeBody from "./components/homeBody";
import EventContainer from "./components/events/eventcontainer";
import FormContainer from "./components/utleie/formcontainer";
import TimeLine from "./components/timeline/timeLine";
import KontaktSide from "./components/kontakt/kontakt";
import Partner from "./components/partner/partner";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Admin/login";
import componentTables from "./components/Admin/backOffice/componentsTables";
import Galleri from "./components/gallery/galleri";
import Sommerfest from "./components/Sommerfest/sommerfest";
import FormPicture from "./components/gallery/new-picture-form";
import Innergalleri from "./components/gallery/innergalleri";
import EventPageContainer from "./components/events/eventpagecontainer";
import Modal from "react-modal";
import HvemharLaget from "./components/hvemharLaget/hvemharLaget";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="body">
          <Route exact path="/admin" component={Login} />
          <Route exact path="/backOffice" component={componentTables} />
          <Route exact path="/" component={HomeBody} />
          <Route exact path="/Arrangementer" component={EventContainer} />
          <Route
            exact
            path="/Arrangementer/:id"
            component={EventPageContainer}
          />
          <Route path="/Utleie" component={FormContainer} />
          <Route path="/TimeLine" component={TimeLine} />
          <Route path="/Partner" component={Partner} />
          <Route path="/Hvemharlaget" component={HvemharLaget} />
          <Route path="/Galleri" component={Galleri} />
          <Route path="/Kontakt" component={KontaktSide} />
          <Route exact path="/Sommerfest" component={Sommerfest} />
          <Route exact path="/FormPicture" component={FormPicture} />
          <Route exact path="/Innergalleri" component={Innergalleri} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
