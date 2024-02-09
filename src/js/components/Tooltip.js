export default class Tooltip {
  static get marking() {
    return `
    <h1 class="tooltip-title">Popover title</h1>
    <p class="tooltip-text">And here's some amazing content.
     It's very engaging. Right?</p>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  showTooltip(element) {
    if (!document.querySelector('.tooltip__container')) {
      const tooltipElement = document.createElement('div');
      tooltipElement.classList.add('tooltip__container');
      tooltipElement.classList.add('tooltip__active');
      tooltipElement.innerHTML = Tooltip.marking;

      document.body.appendChild(tooltipElement);

      const { left, top } = element.getBoundingClientRect();

      tooltipElement.style.left = `${left - tooltipElement.offsetWidth / 2 + element.offsetWidth / 2}px`;
      tooltipElement.style.top = `${top - tooltipElement.offsetHeight - 5}px`;
    } else {
      document.querySelector('.tooltip__container')
        .classList.toggle('tooltip__active');
    }
  }
}
