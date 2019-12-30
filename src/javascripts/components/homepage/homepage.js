import $ from 'jquery';

import utilities from '../../helpers/utilities';

import bio from '../bio/bio';
// import contact from '../contact/contact';
// import navbar from '../myNavbar/myNavbar';

const landingPageArray = [
  {
    name: 'bio',
    // eslint-disable-next-line max-len
    description: 'I\'m a Nashville native who worked in restaurants most of my adult life. Moving into web dev has been an exciting journey that\'s allowed me to play to my natural strengths while learning new skills and ways to problem-solve.',
    imageUrl: '',
  }, {
    name: 'projects',
    description: 'These are some projects that I\'ve done and am proud to share.',
    imageUrl: '',
  }, {
    name: 'technologies',
    description: 'a brief summary of technologies and tools that I\'m versed in.',
    imageUrl: '',
  },
];

const imageClickEvent = (e) => {
  const target = e.target.id.split('hp-')[1];
  if (target === 'bio') {
    bio.printMyBio();
  } else if (target === 'technologies') {
    // print technologies
    // hide homepage + other divs
  } else if (target === 'projects') {
    // print technologies
    // hide homepage + other divs
  }
};

const homeCards = (arr) => {
  let domString = '<div class="card-group d-flex homeCards">';
  arr.forEach((card) => {
    domString += '<div class="card single-card">';
    domString += `<div class="crop-image"><img src=${card.imageUrl} class="homepage-image" alt="${card.name}" id="hp-${card.name}"></div>`;
    domString += '<div class="card-body">';
    domString += `<h5 class="homeCard-title card-title">${card.name}</h5>`;
    domString += `<p class="card-text">${card.description}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  utilities.printToDom(domString, '#homePage');
  $('.homeCards').on('click', '.homepage-image', imageClickEvent);
};

const buildHomePage = () => {
  homeCards(landingPageArray);
};

export default { buildHomePage };
