# Bindings Connect To JavaScript

The next block of code isn't really React at all! It isn't even *code* at all.
It's a **binding**. Let's take a look:

```reasonml
{{#include ../examples/hello-world/src/Index.res:8:11}}
```

Remember modules? Here we see they are more than just wrappers for a React 
component.  They can also contain other things.  Here, the `Document` module 
contains something... odd.  That's the binding.  

A binding is the primary way we escape ReScript and harness the full power of 
the JavaScript ecosystem without re-inventing all the wheels or resorting to 
more convoluted alternatives. You can always tell something is a binding by the 
keyword `external`, meaning "not ReScript".

There are other escape hatches we can use in our code, but for now, we're going 
to do it the right way.

## Bindings Do Three Things

If you've ever read or written a typescript definition (`d.ts`) file, you've 
been down this road before--just the syntax is a little different:

  1. Declares an internal name we can use inside ReScript:

```reasonml
external getElementById: ...
//       ^^^^^^^^^^^^^^ The ReScript identifier.
//
// We can now reference `getElementById` from ReScript.
```

  2. Pairs that internal name with the name of a JavaScript value in scope:

```reasonml
@val ... = "document.getElementById"
//          ^^^^^^^^^^^^^^^^^^^^^^^ A JavaScript value in scope.
//
// The compiler will reference this when we use the ReScript identifier
// `getElementById` in our code.
//
// The `@val` part is trickier, it depends on how to want to reference the
// value. For something that is always in scope like `document`, its the right 
// choice. We have other annotations to use in other circumstances.
```

  3. Provides a type for the value:

```reasonml
...: string => option<Dom.elment> = ...
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ The type.
//
// This type specifically says this is a function (`=>`) that takes a single
// string for an argument and returns an `option<Dom.element>`. Don't worry
// about that last part, for now.  We'll go over it next.
```

## How to Use a Binding

Writing a good binding is, honestly, the hard part.  Using them is as simple as 
using any value in ReScript, as you can see in our hello-world:

```reasonml
{{#include ../examples/hello-world/src/Index.res:13}}
```

Here we're assigning the `option<Dom.element>` returned by the `getElementById` 
function bound to the `Document` module to the name `root`. We pass 
`getElementById` a string because our binding above says that is what it takes 
(and the compiler will not be happy if we try to pass it anything else!).

By the way `Document`, `root`, even calling it `getElementById` are all 
arbitrary. Those are good names because they mirror the names we are used to in 
JavaScript and familiar code is readable code. The only parts that you need to 
get correct are the **type** and the **JavaScript value**.  

So to be silly, we could write:

```reasonml
module Birthday = {
  @val
  external sillyness: string => option<Dom.element> = "document.getElementById";
}

let root = Birthday.sillyness("root")
```

And you would see functionally equivalent compiler output (try it and see the 
resulting `bs.js` file!).

<!-- vim:spelllang=en:spell!:fo=aw2tq
->
