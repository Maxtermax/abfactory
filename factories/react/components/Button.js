import templateFactory from '../templates/index.js';
import DefaultTemplate from '../templates/Button/index.js';

export default class Button {
  render(customTemplate) {
    return templateFactory(customTemplate, DefaultTemplate);
  }
}
