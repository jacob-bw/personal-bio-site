import '../styles/main.scss';

import myNavbar from './components/myNavbar/myNavbar';
import bio from './components/bio/bio';
import contact from './components/contact/contact';
import homepage from './components/homepage/homepage';

const init = () => {
  myNavbar.myNavbar();
  bio.printMyBio();
  bio.showMoreClickEvent();
  contact.contactCard();
  contact.contactClick();
  homepage.buildHomePage();
};

init();
