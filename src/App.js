import Textarea from './components/Textarea/textarea';
import Control from './utils/Control/control';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.appContainer = new Control(this.body, 'div', 'container');
    this.textarea = new Textarea(this.appContainer.node);
    console.log(this.textarea);
  }
}

export default App;
