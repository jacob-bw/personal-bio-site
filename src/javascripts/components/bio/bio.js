import $ from 'jquery';

import utilities from '../../helpers/utilities';

import personalInfo from '../../helpers/data/bioData';

import './bio.scss';

const singleBioCard = (bioInfo) => {
  let domString = '';
  domString += `
    <div class="card">
      <div class="card-body" id=${bioInfo.id}>
        <h4 class="card-title">${bioInfo.questionPrompt}</h4>
        <div class="card-text">${bioInfo.questionAnswer}</div>
        <button class="btn btn-outline-primary" id="showMoreButton">Show More</button>
        <div class="card-body moreInfo hide">${bioInfo.seeMoreDetail}</div>
      </div>
    </div>
  `;
  return domString;
};

const printMyBio = () => {
  $('.homePage').addClass('hide');
  $('.myTechPage').addClass('hide');
  $('.myBioPage').removeClass('hide');
  $('.myProjectsPage').addClass('hide');
  $('.myContactInfo').addClass('hide');

  personalInfo.getPersonalInfo()
    .then((myBio) => {
      let domString = '';
      domString += '<div class="container">';
      myBio.forEach((bio) => {
        domString += singleBioCard(bio);
      });
      domString += '</div>';
      utilities.printToDom(domString, 'bioPage');
    })
    .catch((errorFromPrintMyBio) => console.error(errorFromPrintMyBio));
};

// get click event working before merge, ya dingus

const showMoreClickEvent = (e) => {
  const clicktarget = e.target.id;
  if (clicktarget === '#showMoreButton') {
    $('.moreInfo').on('click').toggleClass('hide');
  }
};

export default { printMyBio, showMoreClickEvent };
