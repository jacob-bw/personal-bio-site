import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getPersonalInfo = () => new Promise((resolve, reject) => {
  axios.get(`${baseURL}/bio.json`)
    .then((response) => {
      const personalInfo = response.data;
      const bio = [];
      Object.keys(personalInfo).forEach((fbId) => {
        personalInfo[fbId].id = fbId;
        bio.push(personalInfo[fbId]);
      });
      resolve(bio);
    })
    .catch((errorFromGetPersonalInfo) => reject(errorFromGetPersonalInfo));
});


export default { getPersonalInfo };
