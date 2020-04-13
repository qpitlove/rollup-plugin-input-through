# rollup-plugin-input-through

[![](https://img.shields.io/npm/v/rollup-plugin-replace.svg?style=flat)](https://www.npmjs.com/package/rollup-plugin-input-through)

input through output without output build

## Installation

```bash
npm install --save-dev rollup-plugin-input-through
```

## Usage

Generally, you need to ensure that ollup-plugin-input-through goes _before_ other things (like rollup-plugin-html2) in your `plugins` array.

```js
// rollup.config.js
import fg from "fast-glob";
import inputThrough from "rollup-plugin-input-through";
import html2 from "rollup-plugin-html2";

export default [{
  input: fg.sync(["src/*.js"]),
  plugins: [
    inputThrough({
      // input: ['src/mainA.js', 'src/mainB.js'],
      // output: ['dist/mainA.js', 'dist/mainB.js'],
      input: (input) => input.replace("src/", "dist/"),
    }),
    html2({
      template: "src/index.html",
      fileName: "index.html",
      onlinePath: ".",
      minify: false,
      externals: [],
    }),
  ],
}];
```

## Options

```js
{
  // `string: (path) => replacement` functions...
  input: (path) => `'${path.dirname(id)}'`,
}
```

## License

MIT
