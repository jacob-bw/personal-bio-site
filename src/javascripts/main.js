import '../styles/main.scss';

import myNavbar from './components/myNavbar/myNavbar';
import homepage from './components/homepage/homepage';

const init = () => {
  homepage.buildHomePage();
  myNavbar.myNavbar();
  myNavbar.navButtons();
};

init();
