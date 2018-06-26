import React from 'react';
import Navbar from './Navbar';
import EventList from './EventList';
import ProduceList from './ProduceList';

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
      <ProduceList />
    </div>
  );
}

export default App;
