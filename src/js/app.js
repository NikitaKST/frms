import Container from './components/Container';

const container = document.querySelector('.container');
const block = new Container(container);

block.bindToDom();
