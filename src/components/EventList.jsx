import React from 'react';
import Event from './Event';

var masterEventList = [
  {
    day: 'Sunday',
    location: 'Lents International',
    hours: '9:00am - 2:00pm',
    booth: '4A'
  },
  {
    day: 'Monday',
    location: 'Pioneer Courthouse Square',
    hours: '10:00am - 2:00pm',
    booth: '7C'
  },
  {
    day: 'Tuesday',
    location: 'Hillsboro',
    hours: '5:00pm - 8:30pm',
    booth: '1F'
  },
  {
    day: 'Wednesday',
    location: 'Shemanski Park',
    hours: '10:00am - 2:00pm',
    booth: '3E'
  },
  {
    day: 'Thursday',
    location: 'Northwest Portland',
    hours: '2:00pm - 6:00pm',
    booth: '6D'
  },
  {
    day: 'Saturday',
    location: 'Beaverton',
    hours: '10:00am - 1:30pm',
    booth: '9G'
  }
];

function EventList () {
  return (
    <div>
      <style jsx> {`
        div {
          background-color: lightblue;
          margin: 30px;
          text-align: center;
        }
        h1 {
          color: white;
          border-bottom: 2px solid white;
          padding: 20px;
        }
      `}</style>
      <h1>Market Schedule</h1>
      {masterEventList.map((event, index) =>
        <Event day={event.day}
          location={event.location}
          hours={event.hours}
          booth={event.booth}
          key={index} />
      )}
    </div>
  );
}

export default EventList;
