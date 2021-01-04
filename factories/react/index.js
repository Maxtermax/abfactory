import GUIFactory from "../main.js";
// Concrete Products
import Button from './components/Button.js';
import Checkbox from './components/Checkbox.js';

export default class ReactFactory extends GUIFactory {
  createButton = () => new Button();
  createCheckbox = () => new Checkbox();
};
