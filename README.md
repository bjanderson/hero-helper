# Hero Helper

This project is built on [Angular](https://angular.io/).

It is a demo app with a similar theme to the Angular Tour of Heros tutorial.

The goal of this app is to go deeper into the development of a full web application with more real-world examples that include third-party libraries (such as @ngrx).


## Server

There is a development-use server located in the /server folder.

It is not intended to be an example of a production server. It is simply a convenient place to generate and serve data from for use in the development of this app.

The server runs on port 3001, but you can change that in the `server/src/index.js` file. If you do, then you will also need to change it in the `proxy-config.json` file.

Before starting the server for the first time, open a terminal in the `server` folder and run

    npm run datagen

Otherwise your server won't have any data to serve.

Then you can start the server by running `npm start` in the `server` folder.


## start

To start the app run

    npm start

To test the build you can run

    npm run build
    npm run serve:build

And the app will be served from the built files in the `dist` folder.


You can build for production by running

    npm run build:prod

## Schematics

This project is built using schematics from @practicalwebdev/schematics \
[GitHub] (https://github.com/bjanderson/practicalwebdev/tree/master/schematics) \
[npm] (https://www.npmjs.com/package/@practicalwebdev/schematics)

## Tests

### Unit Tests
Unit testing is done with [Jest](https://facebook.github.io/jest/).

To run the unit tests run

    npm test

You can clear Jest's cache by running

    npm run test:clear

You can generate test coverage by running

    npm run test:cov

You can run the tests in watch mode by running

    npm run test:watch

### E2E Tests

End-to-end testing is done with [Protractor](https://www.protractortest.org/#/), but I am seeking a better alternative.

To run the e2e tests run

    npm run e2e


### Lint

To run the linter run

    npm run lint


## Miscellaneous

I use [Linux Mint](https://linuxmint.com/) as my operating system.

I use [Visual Studio Code](https://code.visualstudio.com/) as my editor.

I do design with [Inkscape](https://inkscape.org/en/) and [yEd](https://www.yworks.com/products/yed)
