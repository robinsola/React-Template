import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  var linkStyles = {
    textDecoration: 'none'
  };
  return(
    <div>
      <style jsx>{`
        ul {
          font-size: .9em;
          display: flex;
          background-color: black;
          justify-content: center;
          list-style: none;
          border-bottom: 1px solid gray;
        }
        li {
          padding: 10px 20px;
          text-decoration: none;
          color: white;
        }
        li:hover {
          background-color: white;
          color: gray;
        }
      `}</style>
      <ul>
        <Link to='/' style={linkStyles}><li>Home</li></Link>
        <Link to='/About' style={linkStyles}><li>About Us</li></Link>
        <Link to='/EventList' style={linkStyles}><li>Schedule</li></Link>
        <Link to='/ProduceList' style={linkStyles}><li>Produce</li></Link>
      </ul>
    </div>
  );
}

export default Navbar;
