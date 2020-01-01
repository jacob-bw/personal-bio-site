import $ from 'jquery';

import utilities from '../../helpers/utilities';
import bio from '../bio/bio';

import './myNavbar.scss';

const myNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Jacob Best-Wittenberg</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <button class="btn btn-outline-success contactButtonClass" id="contactButton">Contact</button>
      <button class="btn btn-dark bioButton" id="bioButton">Bio</button>
      <button class="btn btn-dark" id="">Projects</button>
      <button class="btn btn-dark" id="">Technologies</button>
    </div>
  </nav>
  <div id="testDiv"></div>
  `;
  utilities.printToDom(domString, 'myNavbar');
};

const navButtons = () => {
  $('#navbarNav').on('click', '#bioButton', bio.printMyBio);
};

export default { myNavbar, navButtons };
