/**
 * @jest-environment jsdom
 */

import Popup from '../scripts/modules/Popup';

test('test popup', () => {
  document.body.innerHTML = '<div class="popup-wrapper"></div>';

  const popupWrapper = document.querySelector('.popup-wrapper');
  const popupBlock = new Popup(popupWrapper);
  popupBlock.render();
  expect(popupWrapper.innerHTML).toBe(Popup.buttonTemplate);
});

test('test infoTip', () => {
  document.body.innerHTML = '<div class="popup-wrapper"></div>';

  const popupWrapper = document.querySelector('.popup-wrapper');
  const popupBlock = new Popup(popupWrapper);
  popupBlock.render();
  const button = popupWrapper.querySelector('.popup-button');
  button.click();
  const infoTip = document.querySelector('.infoTip-visible');
  expect(infoTip).not.toBe('undefined');
});
