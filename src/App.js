import Keycontainer from './components/Keycontainer/keycontainer';
import Textarea from './components/Textarea/textarea';
import Control from './utils/Control/control';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.appContainer = new Control(this.body, 'div', 'container');
    this.textarea = new Textarea(this.appContainer.node);
    this.keys = new Keycontainer(this.appContainer.node);
    this.appContainer.node.addEventListener('click', () => this.updateState());
  }

  updateState() {
    this.textarea.updateText();
  }
}

export default App;
