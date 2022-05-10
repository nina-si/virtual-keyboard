import Control from '../../utils/Control/control';
import { KEY_DATA } from '../../common/key-data';

import './keycontainer.styles.scss';
import Key from '../key/key';

class Keycontainer extends Control {
  constructor(parentNode) {
    super(parentNode, 'div', 'keycontainer');
    this.keyRows = [...KEY_DATA];
    this.renderRows(this.keyRows, this.node);
  }

  renderRows(rowsData, parentNode) {
    [...rowsData].map((rowData) => {
      const row = new Control();
      rowData.map((item) => {
        const key = new Key(row.node, item);
        return key;
      });
      row.node.classList.add('row');
      parentNode.append(row.node);
      return row;
    });
  }
}

export default Keycontainer;
