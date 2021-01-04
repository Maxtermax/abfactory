import templateFactory from '../templates/index.js';
import DefaultTemplate from '../templates/Checkbox/index.js';

export default class Checkbox {
  render(customTemplate) {
    return templateFactory(customTemplate, DefaultTemplate);
  }
}
