import Control from '../../utils/Control/control';

import './key.styles.scss';

class Key extends Control {
  constructor(parentNode, keyData) {
    super(parentNode, 'div', 'key');
    this.node.textContent = keyData.en;
    if (keyData.en === ' ') this.node.classList.add('space');
  }
}

export default Key;
