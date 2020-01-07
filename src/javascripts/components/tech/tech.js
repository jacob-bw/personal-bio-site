import $ from 'jquery';

import utilities from '../../helpers/utilities';

import tech from '../../helpers/data/techData';

import './tech.scss';

const singleTechCard = (techData) => {
  let domString = '';
  // don't forget to swing back and see if you can get the alt src set as techData.techName
  domString += `
  <div class="card tech-card" id="${techData.id}">
  <img class="card-img-top" id="techCardZone" src="${techData.techThumbnail}"></img>
  </div>
  `;
  console.log(techData.techThumbnail);
  return domString;
};

const printTechnologies = () => {
  $('.homePage').addClass('hide');
  $('.myTechPage').removeClass('hide');
  $('.myBioPage').addClass('hide');
  $('.myProjectsPage').addClass('hide');
  $('.myContactInfo').addClass('hide');

  tech.getTechDetails()
    .then((techs) => {
      let domString = '';
      domString += '<div class="tech-container">';
      domString += '<div class="row">';
      techs.forEach((techInfo) => {
        domString += singleTechCard(techInfo);
      });
      domString += '</div></div>';
      utilities.printToDom(domString, 'technologiesPage');
    })
    .catch((errorFromPrintTechnologies) => console.error(errorFromPrintTechnologies));
};

export default { printTechnologies };
