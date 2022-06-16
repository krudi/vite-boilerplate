# vite-boilerplate

A boilerplate with [Vue3](https://github.com/vuejs/vue/),
[Nuxt3](https://github.com/nuxt/), [SASS](https://github.com/sass/sass/) and technology such
as [Vite](https://github.com/vitejs/vite/)

## Quick start

**You need [Nodejs](https://github.com/nodejs/) on your computer before running**

1. First clone this repository
2. Navigate into your project directory
3. Install the dependencies: `npm install` or `yarn install`
4. Run the development server: `yarn dev`
5. (**OPTIONAL**) Change the **.env** file for your personalization

## Starting development mode

Navigate into your project directory and start your development mode up

- `yarn dev`: to compile the [Vue3](https://github.com/vuejs/vue/) application and serve it to the
  browser
    - [SassLoader](https://github.com/webpack-contrib/sass-loader/)
	with [autoprefixer](https://github.com/postcss/autoprefixer/)
    - Hot-reload
    - Source maps
    - [ESLint](https://github.com/eslint/eslint/) with a sample configuration
    - [Stylelint](https://github.com/stylelint/stylelint) with a sample configuration

*You can view the development server at localhost:3000*

## Starting production mode

Navigate into your project directory and start your production mode up

- `yarn prod`: build for production with minification
    - HTML minified
    - CSS of all components extracted into one file and minified
    - JavaScript minified
    - Hashed CSS files and JS files (avoiding cache problems)

## Starting server (production files)

Navigate into your project directory and start your production files
- `yarn start`: opens production files and starts the server

## Starting fixing files

Navigate into your project directory and start linting your files
- `yarn lint`: lints files

## What's inside?

A quick look at what's also in this project

- Testing with [Jest](https://github.com/facebook/jest/) and [@vue/vue3-jest](https://github.com/vuejs/vue-jest/)
  support
- Basic website layout configurator *(assets/scss/toolkit/config.scss)*
