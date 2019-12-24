import utilities from '../../helpers/utilities';

import personalInfo from '../../helpers/data/bioData';

const myBio = () => {
  let domString = '';
  const bioCardData = personalInfo.getPersonalInfo.bio;
  domString += `<div>${bioCardData}<div>`;
  utilities.printToDom(domString, 'bioPage');
};
export default { myBio };
