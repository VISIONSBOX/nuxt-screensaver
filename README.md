<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: @nuxt/screensaver
- Description: My new Nuxt module
-->

# @nuxt/screensaver

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Screensaver component for Nuxt 3 Apps. Dispalys a overlay after idle time. Use component slot to show whatever you want inside.

<!-- - [✨ &nbsp;Release Notes](/CHANGELOG.md) -->
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/@nuxt/screensaver?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

<!-- Highlight some of the features your module provide here -->

- Screensaver component to show and do whatever you want after idle time

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @nuxt/screensaver
```

add to nuxt.config

```js
  modules: ['@nuxt/screensaver'],
```

Add Component to app.vue with optional idleOptions

```html
<Screensaver :idle-options="idleOptions">
  Whatever you want to show in the screensaver ...
</Screensaver>
```

```js
const idleOptions = {
  // idle time in ms
  idle: 60000,
  // events that will trigger the idle resetter
  events: ["mousemove", "mousedown", "keydown", "touchstart"],
  // callback function to be executed after idle time
  onIdle: () => {
    console.log("idle");
    // do whatever you want here
  },
  // callback function to be executed after back form idleness
  onActive: () => {
    console.log("active");
    // do whatever you want here
  },
};
```

That's it! Screensaver-Component will appears after idle time ✨

## Contribution

- https://www.npmjs.com/package/idle-js

<details>
  <summary>Local development</summary>

```bash
# Install dependencies
npm install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@nuxt/screensaver/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@nuxt/screensaver
[npm-downloads-src]: https://img.shields.io/npm/dm/@nuxt/screensaver.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@nuxt/screensaver
[license-src]: https://img.shields.io/npm/l/@nuxt/screensaver.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@nuxt/screensaver
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

```

```
