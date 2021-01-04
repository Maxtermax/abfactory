import UIFactory from './factories/ui.js';

const app = UIFactory(process.argv[2]); 
const ui = app.createUI();

console.log(ui.button.render());
console.log(ui.checkbox.render());
