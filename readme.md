
# auto example svelte tailwind

## installing

just run

```
pnpm i
```

## running

just run

```
vite
```

## reloading

because of vite you can just edit your source
files and everything (including the styling)
will reload instantly in the browser.


## creation

this is how this repo was built (from scratch).

follow same process in https://github.com/auto-lib/auto-example-svelte.

now install the new packages

```
pnpm i -D postcss postcss-load-config svelte-preprocess autoprefixer tailwindcss
```

> why is css so difficult?

create `postcss.config.js`

```js
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const config = {
  plugins: [
    //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
    tailwindcss(),
    //But others, like autoprefixer, need to run after,
    autoprefixer,
  ],
};

module.exports = config;
```

create `app/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

create `svelte.config.cjs`

```cjs
const preprocess = require("svelte-preprocess");

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

module.exports = config;
```

create `tailwind.config.cjs`

```cjs
const config = {
  content: ["./app/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;
```

import the css into `/app/main.js`

```js
import "./app.css"
import App from './App.svelte'

const app = new App({
  target: document.getElementById('root')
})

export default app
```

now you can use tailwind in your svelte files.
e.g. in `app/App.svelte`

```svelte
<script>
  import _ from './state.js';
  let { name } = _['#'];
</script>

<p class="p-5">Hello {$name}</p>
```