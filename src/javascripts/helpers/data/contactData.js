import axios from 'axios';

import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getContactInfo = new Promise((resolve, reject) => {
  axios.get(`${baseURL}/contact.json`)
    .then((response) => {
      const contactInfo = response.data;
      resolve(contactInfo);
    })
    .catch((errorFromGetContactInfo) => reject(errorFromGetContactInfo));
});

export default getContactInfo;
