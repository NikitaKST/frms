import Tooltip from './Tooltip';

export default class Container {
  constructor(parentE1) {
    this.parentE1 = parentE1;
    this.onClick = this.onClick.bind(this);
    this.tooltip = new Tooltip();
  }

  static get button() {
    return '<button type="button" class="btn">Click to toggle popover</button>';
  }

  bindToDom() {
    this.parentE1.innerHTML = Container.button;
    this.parentE1.addEventListener('click', this.onClick);
  }

  onClick(e) {
    this.tooltip.showTooltip(e.target);
  }
}
