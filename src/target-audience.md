# Assumptions

This book is not intended for beginners to React or Javascript programming.  It
expects you to have a basic understanding of fundamentals like package managers,
closure, functions-as-values, and React concepts like state, props, JSX, and
hooks. If you want to teach yourself these concepts along the way feel free,
but you'll need to look to outside resources.

That said, this book **absolutely does not, in any way, shape, or form, require
you to understand anything about functional programming**.  This is, in fact,
the _last_ time you will see the phrase "functional programming".  The central
paradigm of programming a Rescript-React application is *declarative
programming*.  Functional programmers might scoff at the difference, but they
can feel free to take their monads and go.  I prefer to operate in a world where
safe software is shipped quickly and code is crystal clear about programmer
intent and program function: not mindless terminolgy and obsessions over purity
and side effects. You might find yourself increasingly interested in that world
as you work more with ReScript. I did.  But knowing the lingo and esotera and
ideas are simply not necessary to writing great React software with ReScript.

_Note that while I hope to support Windows soon, for now, I'm assuming a POSIX
environment like macOs, Linux, or BSD. Until then, these instructions will work
fine under Windows Subsystems for Linux (WSL)._

## Magic

The point of this Book is to learn and when it comes to learning I hate magic.
So sometimes I might show you the long way to do something.  
