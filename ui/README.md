# hero-helper-ui

This project is built on [Angular 6](https://angular.io/).

## Start

To start the server run

    npm start

To test the build you can run

    npm run build
    npm run serve:build

And the app will be served from the built files in the `dist` folder.

## Test

Unit testing is done with [Jest](https://facebook.github.io/jest/).

To run the unit tests run

    npm run test

End-to-end testing is done with [Protractor](https://www.protractortest.org/#/), but I am seeking a better alternative.

To run the e2e tests run

    npm run e2e

## Lint

To run the linter run

    npm run lint

## Code Generators

There are several different code generators available in the `scripts` folder. They create the boiler-plate files and code for components, models, services, and stores, respectively.

To run a code generator, the model generator for example, run

    node scripts/create-model.js name-of-model

Use lower kabab-case for the name of the thing you are creating and the generator script will automatically create the correct pascal, camel, etc... casing from it to be used throught the generated files.

Some of the generators will automatically add the created thing to the barrel exports in its respective parent folder. For example, the model creator will add the new model to the `models/index.ts` file also.

The point of these generators is to make it quick and easy to add new features to your app, without you having to copy and paste code from somewhere else.

This may turn into scaffolding in the future, but I haven't had time to learn that yet, and this is how I've been doing it for years.
