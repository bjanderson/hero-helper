# Hero Helper

This is a demo app with a similar theme to the Angular Tour of Heros tutorial.

The goal of this app is to go deeper into the development of a full web application with more real-world examples that include third-party libraries (such as @ngrx).

## server

The server runs on port 3001, but you can change that in the `server/src/index.js` file. If you do, then you will also need to change it in the `proxy-config.json` file.

Before starting the server for the first time, open a terminal in the `server` folder and run

    npm run data

Otherwise your server won't have any data to serve.

Then you can start the server by running `npm start` in the `server` folder.

## UI

This project is built on [Angular 6](https://angular.io/).

### Start

To start the server run

    npm start

To test the build you can run

    npm run build
    npm run serve:build

And the app will be served from the built files in the `dist` folder.

### Test

Unit testing is done with [Jest](https://facebook.github.io/jest/).

To run the unit tests run

    npm run test

End-to-end testing is done with [Protractor](https://www.protractortest.org/#/), but I am seeking a better alternative.

To run the e2e tests run

    npm run e2e

### Lint

To run the linter run

    npm run lint

### Code Generators

There are several different code generators available in the `scripts` folder. They create the boiler-plate files and code for components, models, services, and stores, respectively.

To run a code generator, the model generator for example, run

    node scripts/create-model.js name-of-model

Use lower kabab-case for the name of the thing you are creating and the generator script will automatically create the correct pascal, camel, etc... casing from it to be used throught the generated files.

Some of the generators will automatically add the created thing to the barrel exports in its respective parent folder. For example, the model creator will add the new model to the `models/index.ts` file also.

The point of these generators is to make it quick and easy to add new features to your app, without you having to copy and paste code from somewhere else.

This may turn into scaffolding in the future, but I haven't had time to learn that yet, and this is how I've been doing it for years.


## Miscellaneous

I use [Linux Mint](https://linuxmint.com/) as my operating system.

I use [Visual Studio Code](https://code.visualstudio.com/) as my editor.

I do design with [Inkscape](https://inkscape.org/en/) and [yEd](https://www.yworks.com/products/yed)
