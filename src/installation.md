# Installation

The first step is to install support for the ReScript language into your project.
We'll do that via npm, the existing JavaScript package infrastructure. Easy. 

I always install the ReScript compiler in a project, never globally. It's
certainly possible to do that--its just simpler to only have to worry about your
project environment. If you've already installed it globally via `npm` or `yarn`, 
I suggest removing it. 

> ### NPM or Yarn?
>
> Per usual, it doesn't matter. Yarn is my poision of choice, I will not be
> inflicting it upon you other than using it in my example commands.  Most
> commands can be translate to NPM by substituting the word "install" where I
> write "add". 

You'll have to do this installation each time you start a project. Repetition
should help it become second nature. We'll introduce some shortcuts later, but
*I* still do this process manually. Other than when you're reading this book,
how frequently do you start new projects, anyways??

## Create a new Javascript Project

To the command line! This should be treading old ground with most readers, and
so it will be light on comments.

> ### Command Line Notation
>
> In this chapter and throughout the book, we’ll show some commands used in the
> terminal. Lines that you should enter in a terminal all start with `$`. You
> don’t need to type in the `$` character; it indicates the start of each
> command. Lines that don’t start with `$` typically show the output of the
> previous command.
> 
> Lines starting with `#` are notes about the commands, or demonstrate
> alternative ways to accomplish the same thing with the `npm` package manager

New Folder, New Project, New Source Control: 

```console
$ mkdir my-project && cd my-project && git init
Initialized empty Git repository in ..../my-project/.git/
```

> ### Git 
>
> I make the assumption you care about source control, and since Git is widely
> available/used, I show git commands when relevant, and provide git commands
> for you to download examples. You can omit them if you don't care, or bring 
> your own source control.

Initialize a new JavaScript project:

```console
$ yarn init
```

With yarn hit enter throught the prompts, the default should be fine.

## Install ReScript

Install ReScript via the `bs-platform` package.

> _**Note**: It's named this way for irrelevant historical reasons.  It may
> change in a future release, but you'll never know because this warning will be
> gone!_

Per semantic versioning, npm/yarn might install a newer patch release than this 
Book, but don't worry, it will work the same.

```console
$ yarn add --dev bs-platform@~8.4.2
# or `npm install -d bs-platform@~8.4.2`
```

And initialize the project (note the 'dot' at the end of the command)

```console
$ yarn run bsb -init .
```

This gets you started with:
 - A README showing build commands
 - A `bsconfig.json` file that configures the project with basic defaults. 
 - A starter `.gitignore` file -- use it as a guide for other version control
     systems
 - A `src/` folder with a Demo.ml file.

<!-- TODO: Fix -->
Delete the `src/Demo.ml` file. It's still there for legacy reasons, we don't 
need it.

```console
$ rm src/Demo.ml 
```

## Install React

Install React for Rescript via the `reason-react` package.  It has a peer
dependency on good-old `react` and `react-dom` too, so let's do it all at once.

> _**Note**: It's named this way for irrelevant historical reasons.  It may
> change in a future release, but you'll never know because this warning will be
> gone!_

```console
$ yarn add reason-react react react-dom
```

## Configure

Open up `bsconfig.json` and take a look around:

```json
{{#include ../examples/my-project/bsconfig.json}}
```

The official documentation of this file isn't great, but lets add a few things
for a reason-react project (Recall ReScript can be used for much more!):

```json
{{#include ../examples/hello-world/bsconfig.json}}
```

## Tooling: On the Command Line

_You can skip this part if you've gone through it before_

Let's explore some commands the hard way first.  Your project directory should
currently look like:

```
.
├── .gitignore
├── README.md
├── bsconfig.json
├── node_modules 
├── package.json
├── src
└── yarn.lock
```

Let's build nothing!

### Build

```console
$ yarn run bsb -make-world
```

You should see some new files:

```
.
├── .gitignore
├── .merlin       <-- A build tool lockfile.  Safely ignore this!
├── README.md
├── bsconfig.json
├── lib           <-- A build tool cache.  Safely ignore this.
│   └── bs
│       ├── build.ninja
│       └── install.ninja
├── node_modules 
├── package.json
├── src
└── yarn.lock
```

### Watch 

Have the compiler rebuild when it notices new files and saved changes:

```console
$ yarn run bsb -w
>>>> Start compiling
>>>> Finish compiling 17 mseconds
```

You'll have to stop it watching with `ctrl + c`.

### Clean 

Sometimes the compiler can get confused, particularly when several tools are
writing to the same project (your editor, yarn, webpack, etc. etc.). If you want
a clean start, we run:

```console
$ yarn run bsb -clean
Cleaning... 0 files.
```

ReScript might also need to compile ReScript code in your node_modules folder.
To clean *that* code, we use a different command:

```console
$ yarn run bsb -clean-world
```

## Tooling: Scripts

Let's simplify the above into some re-usable commands inside the bottom of 
`package.json`:

```json
{
  /* other stuff */
  "scripts": {
    "build": "yarn run bsb -make-world",
    "watch": "yarn run bsb -w",
    "clean": "yarn run bsb -clean",
    "clean:world": "yarn run bsb -clean-world"
  },
}
```

## Summary

In this module we learned how to build a ReScript environment from scratch. We
explored the ReScript compiler command line tools, and setup some scripts to run
those for us. We're now ready to write an introductory ReScript project.

<!-- TODO: Shortcut -->

