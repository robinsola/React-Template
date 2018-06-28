import React from 'react';
import Farmer from './Farmer';
import farmerOne from '../assets/images/farmer1.jpeg';
import farmerTwo from '../assets/images/farmer2.jpeg';
import farmerThree from '../assets/images/farmer3.jpeg';
import chick from '../assets/images/chick.jpeg';
import cow from '../assets/images/cow.jpeg';
import barn from '../assets/images/barn.jpeg';

var staffList = [
  {
    photo: cow,
    name: 'Cow',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    photo: chick,
    name: 'Chick',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    photo: farmerOne,
    name: 'Charlie',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    photo: farmerTwo,
    name: 'Buddy',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    photo: farmerThree,
    name: 'Sal',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

function About() {
  return (
    <div>
      <style jsx>{`
        img {
          width: 300px;
          height: 300px;
          object-fit: cover;
        }
        .header {
          height: 400px;
          background: url(${barn});
          background-position: center;
        }
        .staffList {
          margin: 20px;
          display: flex;
          justify-content: center;
        }
      `}</style>
      <div className="header">
        <h1>Meet the Team</h1>
      </div>
      <div className="staffList">
        {staffList.map((farmer, index) =>
        <Farmer photo={farmer.photo}
          name={farmer.name}
          bio={farmer.bio}
          key={index} />
        )}
      </div>
    </div>
  );
}


export default About;
