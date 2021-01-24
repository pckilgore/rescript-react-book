# Props Are Labeled Arguments

Take a closer looks at the props of our component:

```reasonml
{{#include ../examples/hello-world/src/Index.res:2:3}}
```

In JavaScript, props are an object with arbitrary keys.  We can refer to the props
object as a whole `props`, or read them off off individually. That is not the 
case in ReScript code (although they get compiled to the same thing!). ReScript 
props are actually **labeled arguments**, denoted by the `~` prefix in ReScript.

So this is not correct:
```reasonml
// WRONG!
module MyComponent = {
  @react.component
  let make = (message) => <span> {React.string(message)} </span>
}
```

But this is:
```reasonml
// CORRECT!
module MyComponent = {
  @react.component
  let make = (~message) => <span> {React.string(message)} </span>
  //          ^ Added a label
}
```

The label must match the prop you apply it to, so if we pick `message` above, 
that means we pass it values like:

```reasonml
@react.component
let make = () => <MyComponent message="My Message" />
```

<!-- vim:spelllang=en:spell!:fo=aw2tq
-
