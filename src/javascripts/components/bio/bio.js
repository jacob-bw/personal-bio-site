import utilities from '../../helpers/utilities';

import personalInfo from '../../helpers/data/bioData';

const singleBioCard = (bioInfo) => {
  let domString = '';
  domString += `
    <div class="card">
      <div class="card-body" id=${bioInfo.id}>
        <h4 class="card-title">${bioInfo.questionPrompt}</h4>
        <div class="card-text">${bioInfo.questionAnswer}</div>
        <div class="card-header" id="headingOne">
        <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">See More</button>
        </h5>
        </div>
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div class="card-body">${bioInfo.seeMoreDetail}</div>
        </div>
      </div>
    </div>
  `;
  return domString;
};

const printMyBio = () => {
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

export default { printMyBio };
