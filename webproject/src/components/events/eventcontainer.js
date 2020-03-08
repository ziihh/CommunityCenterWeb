import React from "react";
import Events from "./events";
import HeaderBody from "../headerBody";
// import EventFilter from "./eventfilter";
// import UpcomingEvents from "./upcomingevents";
import ScrollTopButton from "../topbutton/topButton";
import Footer from "../footer/footer";

class EventContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
      <HeaderBody/>
    {/* <EventFilter/>*/}
      {/*<UpcomingEvents/>*/}
      <Events/>
      <ScrollTopButton/>
      <Footer/>
      </React.Fragment>
    )
  }
}

export default EventContainer
