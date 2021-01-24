# Hello World!

Time to write a ReScript project. 

Modern JavaScript programming involves quite a hefty bit of tooling. Webpack,
Babel, Gulp, node-sass, react-react-app, etc. etc.

ReScript is largely no different, and works well with these tools. This example
uses Webpack, but we'll use `create-react-app` as a more production-ready
solution later.

## A Basic React Web Page

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

## More Tooling

Let's add a basic bundler to this project so we can see our react code. 

```console
$ yarn add webpack webpack-cli
```

Also let's add a script to handle the bundling for us:
```json
{{#include ../examples/hello-world/package.json:12}}
```

So in all it should look like:
```json
{{#include ../examples/hello-world/package.json}}
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

And discover a very empty `Index.bs.js` file:

```javascript
/* This output is empty. Its source's type definitions, externals and/or unused code got optimized away. */
```

If you've followed along great! Your compiler is properly setup and we're ready
to write some React.

## Hello React

Open up `Index.res` in your editor and copy in the following. We'll break it
down later.

```reasonml
{{#include ../examples/hello-world/src/Index.res}}
```

Save, build, and run the bundler command:
```
$ yarn build
$ yarn bundle
```

Reload your browser and you should now also see your message from React! 

One of the joy's of ReScript is that all of your JavaScript experience can be
brought to bear: You are the equivalent of a C programmer fluent in assembly,
only here your 'assembly' is raw JavaScript.

So let's put on our JavaScript hat and take a look at what the ReScript compiler
output in `src/Index.bs.js`:

```reasonml
{{#include ../examples/hello-world/src/Index.bs.js}}
```

That's...not bad right? The compiler also is capable of emitting `commonjs`
if you'd like it to do so, just change the relevant flag in `bsconfig.json`.

In fact, from now on, consider keeping an editor window open to the `bs.js`
output for the file you are working on. Sometimes this output can act as
a Rosetta Stone for ReScript syntax, helping you understand where there is--and
isn't--equivalence between ReScript and JavaScript.

In the next Chapter, we'll walk through `Index.res` step by step and give an
overview of concepts we'll going deeper into in Part 2.

## Summary

In this chapter we were able to get a ReScript project to compile to JavaScript,
view it in the browser, and find the JavaScript output from the compiler.  We
learned that viewing the compiler output--while not necessary--can help you
learn what Reason is doing behind the scenes.

We're ready to learn the basics of a ReScript syntax and start seeing what
happens when we *don't* get it right the first time.

### Breaking It Down


Back to the ReScript file:

### The React Component

```reasonml
{{#include ../examples/hello-world/src/Index.res:1:6}}
```

All React components are modules. 

<!-- vim:spelllang=en:spell!:fo=aw2tq
-->
