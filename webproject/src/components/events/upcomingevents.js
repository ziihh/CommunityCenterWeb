import React from "react";

var events = Data.properties;

var current_datetime = new Date()
var now = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();

var closest = Infinity;
  events.forEach(function(d) {
     var date = new Date(d.date);
     if (date >= now && (date < new Date(closest)|| date < closest)) {
        closest = d;
     }
     console.log(closest);
  });

console.log(closest);

function UpcomingEvents(){
  return (
    <h1> Arrengementer </h1>

  );
}


console.log(events);
console.log();
export default UpcomingEvents
