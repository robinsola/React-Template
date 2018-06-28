import React from 'react';
import basket from '../assets/images/basket.jpeg';

function Main () {
  return (
    <div>
      <style jsx>{`
        .header {
          background: url(${basket});
          background-position: center;
          height: 700px;
        }
      `}</style>
      <div className="header">
        <h1>Avery's Organics</h1>
      </div>
    </div>
  );
}

export default Main;
