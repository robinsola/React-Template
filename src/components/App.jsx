import React from 'react';
import Navbar from './Navbar';
import Router from './Router';

function App() {
  return (
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }
        div {
          font-family: helvetica;
          font-weight: 100;
        }
        h1 {
          font-family: georgia;
          margin: 100px 0;
          color: white;
          font-size: 4em;
          text-shadow: 1.5px 1.5px 6px black;
        }
        .header {
          display: flex;
          justify-content: center;
        }
      `}</style>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
