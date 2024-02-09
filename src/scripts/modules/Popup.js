import InfoTip from './InfoTip';

export default class Popup {
  constructor(parentE1) {
    this.parentE1 = parentE1;
    this.onButtonClick = this.onButtonClick.bind(this);
    this.infoTip = new InfoTip();
  }

  static get buttonTemplate() {
    return '<button type="button" class="popup-button">Click to toggle popover</button>';
  }

  render() {
    this.parentE1.innerHTML = Popup.buttonTemplate;
    this.parentE1.addEventListener('click', this.onButtonClick);
  }

  onButtonClick(e) {
    this.infoTip.showInfoTip(e.target);
  }
}
