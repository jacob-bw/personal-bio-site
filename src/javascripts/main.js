import '../styles/main.scss';

import myNavbar from './components/myNavbar/myNavbar';
// import bio from './components/bio/bio';
import contact from './components/contact/contact';

const init = () => {
  myNavbar.myNavbar();
  // bio.printMyBio();
  // bio.showMoreClickEvent();
  contact.contactCard();
  contact.contactClick();
};

init();
