import Control from '../../utils/Control/control';

import './textarea.styles.scss';

class Textarea extends Control {
  constructor(parentNode) {
    super(parentNode, 'textarea', 'output');
  }
}

export default Textarea;
