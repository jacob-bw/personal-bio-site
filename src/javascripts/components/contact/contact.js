import utilities from '../../helpers/utilities';

const contactCard = () => {
  let domString = '';
  domString += `
  <div class="card">
    <div class="card-body" id="contactCard">
      <h4 class="card-title">Contact</h4>
      <h5 class="card-title"><a href="https://www.linkedin.com/in/jacob-best-wittenberg/ "target="_blank">connect with me on linkedin</a></h5>
      <h5 class="card-title"><a href="mailto:wittenberg.jacob@gmail.com" "target="_blank">email me</a></h5>
      <h5 class="card-title"><a href="https://github.com/jacob-bw" "target="_blank">check out my code on github</a></h5>
      <button class="btn-outline-primary"><a href="https://drive.google.com/file/d/0B3Unyl1m2PyIMmV2ZXlWZEtUWVd5TnFqN3d4bWxyOGRGNVc0/view" "target="_blank">view my resume</a>
      <button class="btn-dark" id="closeContactButton">get outta here</button>
    </div>
  </div>`;
  utilities.printToDom(domString, 'contactCardZone');
};

const contactClick = (e) => {
  const target = e.target.id;
  if (target === 'navbarButton') {
    $('.contactCard').removeClass('hide');
  } else if (target === 'closeContactButton') {
    $('.contactCard').addClass('hide');
  }
};


export default { contactCard, contactClick };
