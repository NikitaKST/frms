export default class InfoTip {
  static get template() {
    return `
    <h1 class="infoTip-title">Popover title</h1>
    <p class="infoTip-description">And here's some amazing content.
     It's very engaging. Right?</p>
    `;
  }

  showInfoTip(element) {
    if (!document.querySelector('.infoTip-box')) {
      const infoTipElement = document.createElement('div');
      infoTipElement.classList.add('infoTip-box');
      infoTipElement.classList.add('infoTip-visible');
      infoTipElement.innerHTML = InfoTip.template;

      document.body.appendChild(infoTipElement);

      const { left, top } = element.getBoundingClientRect();

      infoTipElement.style.left = `${left - infoTipElement.offsetWidth / 2 + element.offsetWidth / 2}px`;
      infoTipElement.style.top = `${top - infoTipElement.offsetHeight - 5}px`;
    } else {
      document.querySelector('.infoTip-box')
        .classList.toggle('infoTip-visible');
    }
  }
}