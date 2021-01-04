export default class Application {
  constructor(concreteFactory) {
    this.factory = concreteFactory;
  }

  createUI() {
    return {
      button: this.factory.createButton(),
      checkbox: this.factory.createCheckbox(),
    };
  }
}
