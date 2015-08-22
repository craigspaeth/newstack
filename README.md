# newstack
Experimenting with full stack React

## Getting Started

* `brew install mongo`
* `brew install nvm`
* `nvm install 0.12`
* `nvm alias default 0.12`
* Fork, clone, cd
* `npm install`
* `mongod`
* `npm start`

## Guidelines

* Only use arrow functions
* Only use let
* Only a single `export default`
* Only imports at the top and export at the bottom of the file
* Don't use null, only undefined or falsey types
* Don't use this—except for this.props and this.state :(
* Don't use classes or prototypes—except for React components :(
* Don't use for statements
* Don't use promises
* Don't use generators
* Don't use semi colons
* Functional > OO
* Composition > Inheritence
* Single quotes > Template strings > Double quotes
* Rules are meant to be broken

## Issues

* Hot reloading is def. more important as server-side templates are now components
* Facebook really wants you to use JSX.. this createElement crap is so verbose
* Can't really copy + paste code you play with in browser
