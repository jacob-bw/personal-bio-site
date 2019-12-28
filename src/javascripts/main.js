import '../styles/main.scss';

import myNavbar from './components/myNavbar/myNavbar';
import bio from './components/bio/bio';

const init = () => {
  myNavbar.myNavbar();
  bio.printMyBio();
  bio.showMoreClickEvent();
};

init();
