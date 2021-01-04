import fs from 'fs';
import path from 'path';

export default fs.readFileSync(
  path.join(
    path.resolve(path.dirname('')
   ), 'factories/vue/templates/Button/Button.vue'),
   'utf-8'
);
