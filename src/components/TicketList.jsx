import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Rango and Balto',
    location: '3A',
    issue: 'Firebase won\'t save record. Help!'
  },
  {
    names: 'Slater and Kenny',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Joe and Robin',
    location: '8E',
    issue: 'Donkey picture not displaying on hover in Zoology app.'
  }
];

function TicketList() {
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;
