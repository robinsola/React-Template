import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
        div {
          padding: 5px 20px;
          border-bottom: 1px solid lightblue;
          background-color: lightyellow;
        }
        h3 {
          font-family: helvetica;
          color: lightblue;
        }
        h3:hover {
          cursor: pointer;
          color: hotpink;
        }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
