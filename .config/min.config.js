import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/wc-markdown.js',
  output: {
    file: 'index.min.js',
    format: 'esm'
  },
  plugins: [terser()]
};
