import $ from 'jquery';

const printToDom = (domString, divId) => {
  $(`#${divId}`).html(domString);
};

export default { printToDom };
