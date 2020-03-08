import React from 'react';

class EventFilter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    this.eventList = Data.properties.map((event, index) =>
     <div key={event.title + index}>
         <h1>{event.tags}</h1>

     </div>)

     return (
         <div className="eventfilter">
             {this.eventList}
         </div>
     )

   }
}
export default EventFilter;
