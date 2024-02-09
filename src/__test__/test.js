/**
 * @jest-environment jsdom
 */

import Container from '../js/components/Container';

test('test container', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const block = new Container(container);
  block.bindToDom();
  expect(container.innerHTML).toBe(Container.button);
});

test('test tooltip', () => {
  document.body.innerHTML = '<div class="container"></div>';

  const container = document.querySelector('.container');
  const block = new Container(container);
  block.bindToDom();

  const button = container.querySelector('.btn');
  button.click();
  const tooltip = document.querySelector('.tooltip__active');
  expect(tooltip).not.toBe('undefined');
});
