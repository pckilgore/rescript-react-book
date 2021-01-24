# React Components Are Modules

_(... containing a `make` function annotated with `@react.component`)_

```reasonml
{{#include ../examples/hello-world/src/Index.res:1:6}}
```

This is a ReScript module, containing a single annotated function called `make`. 

The annotation `@react.component` marks the `make` function as a React function
component. 

> ### Annotations
>
> You'll see several annotations as we go along, all starting with `@`.  Under
> the hood. These are most closly akin to macros than mixins, despite the
> syntax. Making them is well outside the scope of what we'll learn here, but in
> general they help our code stay shorter by *safely* generating boilerplate for
> us.  Nice!

You can see the general syntax of the function, `() => {}`, is identical to the 
JavaScript "fat arrow" syntax. Unlike the equivalent JavaScript (and among other 
things), the function is missing a `return` statement before the JSX.  In 
ReScript, there is no `return` keyword: The last value of any function is 
automatically returned. Since the JSX expression is last, it is automatically 
returned from the `make` function.

All React components are modules, and each module can contain one and only one 
React Component that takes the name of the module. However, modules can be 
nested, and so this is hardly a limitation, for example:

```reasonml
module Post = {
  // Nested Component
  module Title = {
    @react.component
    let make = (~title) => <h1>{React.string(title)}</h1>
  }

  // Top level component
  @react.component
  let make = () => {
    <div>
      <Title title="My Post" />
      {React.string("ReScript Is Great!")}
    </div>
  }
}
```

Creates a `<Post />` react component, which itself has a `<Title />` component 
as a submodule. 

<!-- vim:spelllang=en:spell!:fo=aw2tq
-
