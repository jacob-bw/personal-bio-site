import $ from 'jquery';

import utilities from '../../helpers/utilities';
import bio from '../bio/bio';
import contact from '../contact/contact';
import hp from '../homepage/homepage';
import projects from '../projects/projects';
import tech from '../tech/tech';

import './myNavbar.scss';

const myNavbar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Jacob Best-Wittenberg</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <button class="btn btn-outline-success contactButtonClass" id="contactButton">Contact</button>
      <button class="btn btn-dark bioButton" id="bioButton">Bio</button>
      <button class="btn btn-dark" id="projectsButton">Projects</button>
      <button class="btn btn-dark" id="techButton">Technologies</button>
    </div>
  </nav>
  `;
  utilities.printToDom(domString, 'myNavbar');
};

const navButtons = () => {
  $('.navbar').on('click', '.navbar-brand', hp.buildHomePage);
  $('#navbarNav').on('click', '#contactButton', contact.contactCard);
  $('#navbarNav').on('click', '#bioButton', bio.printMyBio);
  $('#navbarNav').on('click', '#projectsButton', projects.printProjects);
  $('#navbarNav').on('click', '#techButton', tech.printTechnologies);
};

export default { myNavbar, navButtons };
