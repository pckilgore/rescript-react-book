# Hello World!

Time to write a ReScript project. 

Modern JavaScript programming involves quite a hefty bit of tooling. Webpack,
Babel, Gulp, node-sass, react-react-app, etc. etc.

Rescript is largely no different, and works well with these tools. This example
uses webpack, but we'll use `create-react-app` as a more production-ready
solution later.

## A Basic React Webpage

Bootstrap a new project (feel free to use one you created as part of the
installation chapter), and add a new HTML file:

```console
my-project/ 
$ touch index.html
```

Inside:
```html
{{#include ../examples/hello-world/index.html}}
```

Open that file in the browser, you should see your hard-coded message.

```console
$ open index.html

# For macOs, the above is easist. That does not always work on *nix or BSD, you
# can usually try `firefox index.html`, or just File->Open from a menu.
```

## Hello ReScript

Let's write some code!

Create an empty file `Index.res` in the `src/` folder. Then build it:

```console
$ yarn build
Dependency Finished
bsb: [3/3] src/Index.cmj
```

You should now see **2** files in the `src/` directory:

```console
src/ $ ls
Index.bs.js Index.res
```

And discover a very empty file:

```javascript
/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */
```

If you've followed along great! Your compiler is properly setup and we're ready
to write some React.

## Hello React

Open up `Index.res` in your editor and copy in the following. We'll break it
down below:

```ocaml

```
