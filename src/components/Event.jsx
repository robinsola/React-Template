import React from 'react';
import PropTypes from 'prop-types';

function Event(props) {
  return(
    <div>
      <style jsx>{`
        ul {
          list-style: none;
          margin: 20px 0;
          padding: 0 0 20px 0;
          border-bottom: 2px solid white;
        }
        li {
          margin: 0 0 5px 0;
        }
        li:first-of-type {
          font-size: 1.3em;
        }
      `}</style>
      <div className="schedule">
        <ul>
          <li><strong>{props.location}</strong></li>
          <li>{props.day}</li>
          <li>{props.hours}</li>
          <li>Booth: {props.booth}</li>
        </ul>
      </div>
    </div>
  );
}

Event.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Event;
