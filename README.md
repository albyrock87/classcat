# Classcat
[![Travis CI](https://img.shields.io/travis/JorgeBucaran/classcat/master.svg)](https://travis-ci.org/JorgeBucaran/classcat)
[![Codecov](https://img.shields.io/codecov/c/github/JorgeBucaran/classcat/master.svg)](https://codecov.io/gh/JorgeBucaran/classcat)
[![npm](https://img.shields.io/npm/v/classcat.svg)](https://www.npmjs.org/package/classcat)

Classcat is a 0.3 KB JavaScript utility for conditionally concatenating CSS [class names](https://developer.mozilla.org/en-US/docs/Web/API/Element/className).

[Try it Online](https://codepen.io/JorgeBucaran/pen/GMRjRB)

```js
import cc from "classcat"

export function ToggleButton({ toggle, isOn }) {
  return (
    <div class="btn" onclick={toggle}>
      <div
        class={cc({
          circle: true,
          off: !isOn,
          on: isOn
        })}
      />
      <span
        class={cc({
          textOff: !isOn
        })}
      >
        {isOn ? "ON" : "OFF"}
      </span>
    </div>
  )
}
```

Classcat works in all browsers >= IE9 and you can use it with your favorite JavaScript UI library.

[![Classcat](https://user-images.githubusercontent.com/56996/30416101-cda83bd4-9965-11e7-9db5-230ba3fc83fd.gif)](https://codepen.io/JorgeBucaran/full/GMRjRB/)

## Installation

Install with npm / Yarn.

<pre>
npm i <a href="https://www.npmjs.com/package/classcat">classcat</a>
</pre>

Then with a module bundler like [Rollup](https://github.com/rollup/rollup) or [Webpack](https://github.com/webpack/webpack), use as you would anything else.

```js
import cc from "classcat"
```

Or download the minified library from [unpkg](https://unpkg.com/classcat@latest/dist/classcat.js) or [jsDelivr](https://cdn.jsdelivr.net/npm/classcat@latest/dist/classcat.js).

```html
<script src="https://unpkg.com/classcat"></script>
```

Then find it on `window.classcat`.

## Usage

Classcat is a unary function (accepts a single argument) expecting an array of elements or an object of keys and returns a string that is the result of joining all elements of the array or object keys.

If the value associated with a given key is falsey, the key will be ignored.

```js
cc([
  "btn",
  {
    "btn-active": true,
    "btn-large": false
  }
]) // => btn btn-active
```

If an object contains child elements, the parent key will be used as a prefix.

```js
cc([
  "tab",
  {
    tab: {
      "--success": true,
      "--error": false,
      "--pending": false
    }
  }
]) // => tab tab--success
```

## Credits

Classcat is inspired by [JedWatson/classNames](https://github.com/JedWatson/classnames) with support for nested objects and [better performance](/bench/README.md).
The difference between classcat and classNames is that classNames accepts a [variable number of arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), whereas classcat only accepts a single argument.

```js
cc("foo", "bar", "baz") // => foo
```

To work around this, wrap the arguments inside an array.

```js
cc(["foo", "bar", "baz"]) // => foo bar baz
```

## License

Classcat is MIT licensed. See [LICENSE](LICENSE.md).
