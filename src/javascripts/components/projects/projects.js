import $ from 'jquery';

// import utilities from '../../helpers/utilities';

import projData from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities';

import './projects.scss';

const projectCard = () => {
  let domString = '';
  domString += `
  <div class="project-card col-md-3">
    <div class="card-body">
      <div class="border-top my-3 hide"></div>
      <div class="view overlay">
      <img class="card-img-top" src="${projData.projectImgUrl}" alt="Card image cap">
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
        <h4 class="card-title" id="${projData.id}">${projData.projectName}</h4>
        <h6 id="">${projData.projectSummary}</h6>
        <div class="project-footer d-flex justify-content-between">
        <li id="icons"><a href="${projData.projectGitHub}" target="_blank"><i class="fab fa-github"></i></a></li>
        <li id="icons"><a href="${projData.projectUrl}" target="_blank"><i class="fas fa-desktop"></i></a></li>    
        </div>
    </div>
  </div>
  `;
  return domString;
};

const printProjects = () => {
  $('.homePage').addClass('hide');
  $('.myTechPage').addClass('hide');
  $('.myBioPage').addClass('hide');
  $('.myProjectsPage').removeClass('hide');
  $('.myContactInfo').addClass('hide');

  projData.getProjectsData()
    .then((projects) => {
      let domString = '';
      domString += '<div class="container">';
      projects.forEach((project) => {
        domString += projectCard(project);
      });
      domString += '</div>';
      utilities.printToDom(domString, 'projectsPage');
    })
    .catch((errorFromPrintProjects) => console.error(errorFromPrintProjects));
};

export default { printProjects };
