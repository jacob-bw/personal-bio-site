import utilities from '../../helpers/utilities';

const contactCard = () => {
  let domString = '';
  domString += `
  <div class="card">
    <div class="card-body" id="contactCard">
      <h4 class="card-title">Contact</h4>
      <h5 class="card-title"><a href="https://www.linkedin.com/in/jacob-best-wittenberg/ "target="_blank">connect with me on linkedin</a></h5>
      <h5 class="card-title"><a href="mailto:wittenberg.jacob@gmail.com" "target="_blank">email me directly</a></h5>
      <h5 class="card-title"><a href="https://github.com/jacob-bw" "target="_blank">check out my code on github</a></h5>
      <button class="btn-dark" id="closeContactButton">get outta here</button>
    </div>
  </div>`;
  utilities.printToDom(domString, 'contactCardZone');
};

// const closeBoard = () => {
//   const { uid } = firebase.auth().currentUser;
//   $(document).click((e) => {
//     const buttonId = e.target.id;
//     if (buttonId === 'closeBoardButton') {
//       // eslint-disable-next-line no-undef
//       showAllBoards(uid);
//     }
//   });
// };

const openContactCard = (e) => {
  const buttonId = e.target.id;
  contactCard(buttonId);
};

export default { openContactCard };
