import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from './components/app.jsx';


const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App/>, root);
}

// needed components :
// app
//search bar
// displayed gif = result
// list of gifs
//
// todo
// When a user types a query, the list of Gifs should display the 10 first
 // results the giphy-api returns.
// When a user clicks on a gif from the list, it should appear on the main
// scene on the left.
