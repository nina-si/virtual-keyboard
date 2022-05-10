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
  }

  type() {
    if (!this.keyData.functional) {
      addText(this.node.textContent, this.textType);
    }
  }
}

export default Key;
