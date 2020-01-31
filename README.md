# 11ty-nunjucks-config

Playing around with Eleventy+Nunjucks `autoescape` config.

This example shows how you can toggle the Nunjucks `autoescape` flag using a custom Nunjucks environment.

The following examples show how you can set the `autoescape` config using either `Nunjucks.Environment()` and `Nunjucks.FileSystemLoader()`, or using `Nunjucks.configure()` to create a custom environment:

```js
// Option 1, Setting a custom Nunjucks.Environment and
// Nunjucks.FileSystemLoader.
const env = new Nunjucks.Environment(
  // we need to pass in our includes dir here
  new Nunjucks.FileSystemLoader([includesDir]),
  { autoescape: false }
);
```

```js
// Option 2, `Nunjucks.configure()`.
const env = Nunjucks.configure(includesDir, {
  autoescape: false
});
```

For more information, see:

- https://www.11ty.dev/docs/languages/nunjucks/#optional-use-your-nunjucks-environment
- https://www.11ty.dev/docs/layouts/#prevent-double-escaping-in-layouts
- https://mozilla.github.io/nunjucks/templating.html#autoescaping
- https://mozilla.github.io/nunjucks/templating.html#escape-aliased-as-e
- https://mozilla.github.io/nunjucks/templating.html#safe