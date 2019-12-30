import $ from 'jquery';

import utilities from '../../helpers/utilities';

// import contacts from '../contact/contact';

import './myNavbar.scss';

const testText = () => {
  let domString = '';
  domString += '<h2>test works, yer not an idiot</h2>';
  utilities.printToDom(domString, 'testDiv');
};

const testClick = (e) => {
  const target = e.target.id;
  if (target === 'testBUtton') {
    testText();
  }
};

const myNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Jacob Best-Wittenberg</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <button class="btn btn-outline-success contactButtonClass" id="contactButton">Contact</button>
      <button class="btn btn-warning" id="testButton">Test</button>
      <button class="btn btn-dark" id="bioButton">Bio</button>
      <button class="btn btn-dark" id="">Projects</button>
      <button class="btn btn-dark" id="">Technologies</button>
    </div>
  </nav>
  <div id="testDiv"></div>
  `;

  utilities.printToDom(domString, 'myNavbar');
  $('body').on('click', '#testButton', testClick);
  // $('body').on('click', '#contactButton', contacts.contactClick);
};

export default { myNavbar };
