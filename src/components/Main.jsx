import React from 'react';

function Main () {
  return (
    <div>
      <style jsx>{`
        h1 {
          margin: 100px 0;
          color: white;
        }
        .header {
          display: flex;
          justify-content: center;
          height: 700px;
          font-size: 2em;
          background: url("https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
          background-position: center;
        }
      `}</style>
      <div className="header">
        <h1>Avery's Organics</h1>
      </div>
    </div>
  );
}

export default Main;
