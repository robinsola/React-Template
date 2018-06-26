import React from 'react';
import Navbar from './Navbar';

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
      `}</style>
      <Navbar />
    </div>
  );
}

export default App;
