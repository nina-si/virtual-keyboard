import Control from '../../utils/Control/control';
import { state } from '../../common/state';

import './key.styles.scss';
import { addText } from '../../utils/utils';

class Key extends Control {
  constructor(parentNode, keyData) {
    super(parentNode, 'div', 'key');
    this.keyData = keyData;
    this.language = state.language;
    this.textType = state.textType;
    this.node.textContent = keyData[this.language];
    if (keyData.en === ' ') this.node.classList.add('space');
    this.node.addEventListener('click', () => this.type());
    document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    document.addEventListener('keyup', (e) => this.handleKeyUp(e));
  }

  type() {
    if (!this.keyData.functional) {
      addText(this.node.textContent, this.textType);
    }
  }

  handleKeyPress(e) {
    if (e.key === this.keyData.en.toLowerCase()) {
      this.node.classList.add('key-active');
      this.type();
    }
  }

  handleKeyUp(e) {
    if (e.key === this.keyData.en.toLowerCase())
      this.node.classList.remove('key-active');
  }
}

export default Key;
