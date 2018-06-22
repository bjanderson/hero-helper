# Hero Helper

This is a demo app with a similar theme to the Angular Tour of Heros tutorial.

The goal of this app is to go deeper into the development of a full web application with more real-world examples that include third-party libraries (such as @ngrx).

There are two packages in this repo, named `server` and `ui` respectively.

## server

The server runs on port 3001, but you can change that in the `server/src/index.js` file. If you do, then you will also need to change it in the `ui/proxy-config.json` file.

Before starting the server for the first time, open a terminal in the `server` folder and run

    npm run data

Otherwise your server won't have any data to serve.

Then you can start the server by running `npm start` in the server folder.

## ui

To start the UI open a terminal in the `ui` folder and run

    npm start

The ui will be served on http://localhost:4200

## Miscellaneous

I use [Linux Mint](https://linuxmint.com/) as my operating system.

I use [Visual Studio Code](https://code.visualstudio.com/) as my editor.

I recommend the following VSCode plugins (I am not affiliated with any of them):

* [EditorConfig for VS Code](https://github.com/editorconfig/editorconfig-vscode)
* [TSLint](https://github.com/Microsoft/vscode-tslint)
* [Jest](https://github.com/jest-community/vscode-jest)
* [Git History](https://github.com/DonJayamanne/gitHistoryVSCode)
* [Settings Sync](https://github.com/shanalikhan/code-settings-sync)

I do design with [Inkscape](https://inkscape.org/en/)
