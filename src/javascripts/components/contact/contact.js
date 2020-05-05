import $ from 'jquery';

import utilities from '../../helpers/utilities';
import hp from '../homepage/homepage';

import './contact.scss';

const contactCard = () => {
  $('.homePage').addClass('hide');
  $('.myTechPage').addClass('hide');
  $('.myBioPage').addClass('hide');
  $('.myProjectsPage').addClass('hide');
  $('.myContactInfo').removeClass('hide');

  let domString = '';
  domString += `
  <div class="d-flex justify-content-center">
    <div class="contactCard">
      <div class="card-body" id="contactCardBody">
      <h4 class="contact-card-title">Contact</h4>
      <hr/>
      <h5 class="card-title"><a href="https://www.linkedin.com/in/jacob-best-wittenberg/ "target="_blank"><i class="far fa-comment-alt"></i> connect with me on linkedin</a></h5>
      <h5 class="card-title"><a href="mailto:wittenberg.jacob@gmail.com" "target="_blank"><i class="fas fa-at"></i> email me</a></h5>
      <h5 class="card-title"><a href="https://github.com/jacob-bw" "target="_blank"><i class="fas fa-code-branch"></i> check out my code on github</a></h5>
      <h5 class="card-title"><a href="https://drive.google.com/file/d/1L8xLsnzDGASRoNBEZr2vhPFr3Gy0HETO/view?usp=sharing" "target="_blank"><i class="far fa-file"></i> view my resume</a></h5>
      <hr/>
      <div class="closeContact"><button class="btn btn-dark" id="closeContactButton">x</button></div>
      </div>
    </div>
  </div>`;
  utilities.printToDom(domString, 'contactCardZone');
  $('.contactCard').on('click', '#closeContactButton', hp.buildHomePage);
};

export default { contactCard };
