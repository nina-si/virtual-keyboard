import { state } from '../common/state';
import { TEXT_TYPE } from './constants';

export const addText = (letter, type) => {
  if (type && type === TEXT_TYPE.LOW) {
    letter = letter.toLowerCase();
  } else if (type && type === TEXT_TYPE.UPPER) {
    letter = letter.toUpperCase();
  }
  state.currentText += letter;
};
