import React from 'react';
import ReactDOM from 'react-dom';

// todo
// When a user types a query, the list of Gifs should display the 10 first
 // results the giphy-api returns.
// When a user clicks on a gif from the list, it should appear on the main
// scene on the left.

import '../assets/stylesheets/application.scss';

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}

// needed components :
// app
//search bar
// displayed gif = result
// list of gifs
//
