import path from 'path';
import fs from 'fs';
import purify from 'purify-css';

const content = ['src/views/*.pub'];
const css = ['dist/public/css/style.css'];

const options = {
  output: './dist/public/css/style.css'
};

purify(content, css, options);