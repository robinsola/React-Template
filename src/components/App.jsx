import React from 'react';
import Navbar from './Navbar';
import EventList from './EventList';

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
      <EventList />
    </div>
  );
}

export default App;
