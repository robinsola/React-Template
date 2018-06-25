import React from 'react';

function Header() {
  let headerStyles = {
    backgroundColor: 'hotpink',
    color: 'snow',
    fontFamily: 'monospace',
    fontSize: '2em',
    padding: '30px',
    textAlign: 'center'
  };
  return (
    <div style={headerStyles}>
      <h1>Help Queue</h1>
    </div>
  );
}

export default Header;
