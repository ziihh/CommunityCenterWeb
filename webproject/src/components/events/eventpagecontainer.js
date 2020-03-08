import React from "react";
import HeaderBody from "../headerBody";
import EventPage from "./eventpage"
import ScrollTopButton from "../topbutton/topButton";
import Footer from "../footer/footer";


class EventPageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            events:[]
        };
    }

    componentDidMount(){
        let eventArr = this.props.location.state.events;
        let eventId = this.props.match.params.id;
        
        let event = eventArr.find(function(e){
            return e.eventId == eventId;
        });
        this.setState({events:event})
    }
    render(){
        return (
            <React.Fragment>
            <HeaderBody/>
            <EventPage 
                title={this.state.events.title}
				date={this.state.events.date}
				time={this.state.events.time}
                image={this.state.events.image}
                imagealt={this.state.events.imagealt}
				description={this.state.events.description}
				tags={this.state.events.tags} />
            <ScrollTopButton/>
            <Footer/>
            </React.Fragment>
      
        )
    }

}

export default EventPageContainer