# YangStarter

## Start with a new angular-cli project

    ng new hero-helper --routing --style scss -p ys

## Eject that project so that we can control webpack directly

    cd hero-helper
    ng eject

## Move all configurations into a config directory

Break the webpack config up into manageable chunks.

Add the ContextReplacementPlugin to get rid of webpack critical dependency warnings.

## Customize the project to fit our needs

-----
