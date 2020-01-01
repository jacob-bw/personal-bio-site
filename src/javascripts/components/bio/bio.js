import $ from 'jquery';

import utilities from '../../helpers/utilities';

import personalInfo from '../../helpers/data/bioData';

import './bio.scss';

const showMore = (e) => {
  const target = e.target.id.split('more-')[1];
  // eslint-disable-next-line no-undef
  if (target === `${bioInfo.id}`) {
  // eslint-disable-next-line no-undef
    $(`#more-${bioInfo.id}`).toggleClass('hideMore');
  }
};

const singleBioCard = (bioInfo) => {
  let domString = '';
  domString += `
    <div class="card">
      <div class="card-body" id=${bioInfo.id}>
        <h4 class="card-title">${bioInfo.questionPrompt}</h4>
        <div class="card-text">${bioInfo.questionAnswer}</div>
        <button class="btn btn-outline-primary" id="showMoreButton more-${bioInfo.id}">more details</button>
        <div class="card-body moreInfo hideMore" id="more-${bioInfo.id}">${bioInfo.seeMoreDetail}</div>
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
      // eslint-disable-next-line no-undef
      $('.card-body').on('click', `#more-${bioInfo.id}`, showMore);
    })
    .catch((errorFromPrintMyBio) => console.error(errorFromPrintMyBio));
};

export default { printMyBio };
