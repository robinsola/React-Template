import React from 'react';
import PropTypes from 'prop-types';

function Farmer(props) {
  return(
    <div>
      <style jsx>{`
        img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }
      `}</style>
      <img src={props.photo}/>
      <h4>{props.name}</h4>
      <p>{props.bio}</p>
    </div>
  );
}

Farmer.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  bio: PropTypes.string
};

export default Farmer;
