import $ from 'jquery';

import pd from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities';

import './projects.scss';

const projectCard = (projectData) => {
  let domString = '';
  domString += `
  <div class="project-card col-md-3">
    <div class="card-body">
      <div class="border-top my-3 hide"></div>
      <div class="view overlay">
      <img class="card-img-top" src="${projectData.projectImgUrl}" alt="Card image cap">
      <a href="#!">
        <div class="mask rgba-white-slight"></div>
      </a>
    </div>
        <h4 class="card-title" id="${projectData.id}">${projectData.projectName}</h4>
        <h6 id="">${projectData.projectSummary}</h6>
        <div class="project-footer d-flex justify-content-between">
        <li id="icons"><a href="${projectData.projectGitHub}" target="_blank"><i class="fab fa-github"></i></a></li>
        <li id="icons"><a href="${projectData.projectUrl}" target="_blank"><i class="fas fa-desktop"></i></a></li>    
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

  pd.getProjectsData()
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
