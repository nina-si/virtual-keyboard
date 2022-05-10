import { state } from '../../common/state';
import Control from '../../utils/Control/control';

import './textarea.styles.scss';

class Textarea extends Control {
  constructor(parentNode) {
    super(parentNode, 'textarea', 'output');
    this.node.textContent = state.currentText;
  }

  updateText() {
    this.node.textContent = state.currentText;
  }
}

export default Textarea;
