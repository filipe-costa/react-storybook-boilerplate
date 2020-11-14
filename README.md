# About this project

This is a boilerplate project using Reactjs, Storybook, Jest, React testing Library, Webpack 4 and Typescript.
Therefore, it contains all the configuration that is necessary to change, this is also bug free.

## Key takeways

  * Used Typescript to generate type definitions using ES6 module system as target
  * Used Babel-Loader with Webpack 4
  * Played around with both Webpack 4 and 5 to solve bug issues and come up with a solution, read more below.

## Webpack 4 vs 5 experiment using Commonjs as libraryTarget

Both generate Commonjs modules but:

  * Webpack 5 seems to be backwards compatible with Webpack 4 module system, or at least in the way it tries to resolve modules that use a so slightly different mechanism.
  * Importing generated code using Webpack 5 into a Webpack 4 project, might throw errors where a given module is not a function or it is undefined. This doesn't happen if you use a given library as dependency (my case it was react), but when you use externals, the error persists.
  * If you read the auto-generated code for this library for both, it is different in some aspects.

## React Hooks when testing components locally

This was by far the simplest solution and you can find it all over the internet, mainly on the React docs.

On your library folder (mylib), simply do:
  
    mylib$ npm link ../myapp/node_modules/react
    mylib$ yarn link

On your app, do:

    app$ yarn link mylib

This will create a symlink to only one version of React, so when you build your package, it will be linked to this one. This is fine for testing one component, but rather cumbersome at later stages.





