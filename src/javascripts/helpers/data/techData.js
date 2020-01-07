import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getTechDetails = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/technologies.json`)
    .then((response) => {
      const techInfo = response.data;
      const techlist = [];
      Object.keys(techInfo).forEach((fbId) => {
        techInfo[fbId].id = fbId;
        techlist.push(techInfo[fbId]);
      });
      resolve(techlist);
    })
    .catch((errorFromGetTechDetails) => reject(errorFromGetTechDetails));
});

export default { getTechDetails };
