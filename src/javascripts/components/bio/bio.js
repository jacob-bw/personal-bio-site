import $ from 'jquery';

import utilities from '../../helpers/utilities';

import personalInfo from '../../helpers/data/bioData';

import './bio.scss';

const singleBioCard = (bioInfo) => {
  let domString = '';
  domString += `
    <div class="card bio-card">
      <div class="card-body" id=${bioInfo.id}>
        <h4 class="card-title">${bioInfo.questionPrompt}</h4>
        <hr/>
        <div class="card-text">${bioInfo.questionAnswer}</div>
        <div class="card-text moreInfo" id="">${bioInfo.seeMoreDetail}</div>
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
      domString += '<div class="container justify-items-center bioDome">';
      domString += '<div class="row justify-content-center">';
      myBio.forEach((bio) => {
        domString += singleBioCard(bio);
      });
      domString += '</div></div>';
      utilities.printToDom(domString, 'bioPage');
    })
    .catch((errorFromPrintMyBio) => console.error(errorFromPrintMyBio));
};

export default { printMyBio };
