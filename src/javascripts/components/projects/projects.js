import $ from 'jquery';

import pd from '../../helpers/data/projectsData';
import utilities from '../../helpers/utilities';

import './projects.scss';

const projectCard = (projectData) => {
  let domString = '';
  domString += `
  <div class="project-card col-md">
    <div class="card-body">
    <div class="crop-image"><a href="${projectData.projectUrl}" target="_blank"><img src=${projectData.projectImgUrl} class="card-img-top"></a></div>
      <h4 class="card-title" id="${projectData.id}">${projectData.projectName}</h4>
      <h6 id="">${projectData.projectSummary}</h6>
      <div class="project-footer d-flex justify-content-around">
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
      domString += '<div class="project-container">';
      domString += '<div class="row">';
      projects.forEach((project) => {
        domString += projectCard(project);
      });
      domString += '</div></div>';
      utilities.printToDom(domString, 'projectsPage');
    })
    .catch((errorFromPrintProjects) => console.error(errorFromPrintProjects));
};

export default { printProjects };
