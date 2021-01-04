import fs from 'fs';
import path from 'path';

export default fs.readFileSync(
  path.join(
    path.resolve(path.dirname('')
   ), 'factories/react/templates/Checkbox/Checkbox.jsx'),
   'utf-8'
);
