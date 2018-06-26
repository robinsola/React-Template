import React from 'react';
import PropTypes from 'prop-types';

function Produce (props) {
  return (
    <div>
      <style jsx>{`
        div {
          margin: 30px;
          padding: 20px;
        }
        h4 {
          border-bottom: 1px solid;
          color: green;
          font-size: 1.3em;
        }
        ul {
          list-style: none;
        }
      `}</style>
      <h4>{props.month}</h4>
      <ul>{props.selection}</ul>
    </div>
  );
}


Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;
