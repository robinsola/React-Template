import React from 'react';

function Navbar () {
  return(
    <div>
      <style jsx>{`
        ul {
          font-size: .9em;
          display: flex;
          justify-content: center;
          list-style: none;
          margin: 20px 0 0 0;
          padding: 10px;
          border-bottom: 1px solid gray;
        }
        li a {
          text-decoration: none;
          padding: 10px 20px;
          color: gray;
          transition: background-color .5s;
        }
        li a:hover {
          color: white;
          background-color: gray;
        }
        h1 {
          margin: 40px 0;
          color: white;
        }
        .header {
          display: flex;
          justify-content: center;
          height: 600px;
          background: url("https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          background-position: center;
        }
      `}</style>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">Produce</a></li>
      </ul>
      <div className="header">
        <h1>Avery's Organics</h1>
      </div>
    </div>
  );
}

export default Navbar;
