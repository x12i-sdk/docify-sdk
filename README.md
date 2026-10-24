# @x12i/docify-sdk usage example

createDocifySdk(bundle) — knowledge SDK factory for x12i docify products.

This consuming application demonstrates **create a small bundled knowledge sdk and read a guide** using the published npm package, pinned to `1.6.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Create a product knowledge SDK from an explicit bundled-content object.
- Let consumers list and read documentation through a stable factory-produced interface.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/docify-sdk)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
