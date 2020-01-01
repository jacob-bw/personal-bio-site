import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getProjectsData = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/projects.json`)
    .then((response) => {
      const projectInfo = response.data;
      const projectArr = [];
      Object.keys(projectInfo).forEach((fbId) => {
        projectInfo[fbId].id = fbId;
        projectArr.push(projectInfo[fbId]);
      });
      resolve(projectArr);
    })
    .catch((errorFromGetProjectsData) => reject(errorFromGetProjectsData));
});

export default { getProjectsData };
