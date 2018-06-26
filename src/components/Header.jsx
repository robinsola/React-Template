import React from 'react';

function Header() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: hotpink;
          color: snow;
          font-family: monospace;
          font-size: 2em;
          padding: 30px;
          text-align: center;
        }
      `}</style>
      <h1>Help Queue</h1>
    </div>
  );
}

export default Header;
