## Srikanth's technical task

This single page application fetches the Star Wars Characters from it's API & displays it in a tabular form.

---

## Getting Started

**Prerequisites** 

1. Install [yarn](https://yarnpkg.com/en/).
2. For macOS users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#mac-stable).
2. For Windows users, please follow these [instructions](https://yarnpkg.com/lang/en/docs/install/#windows-stable). There are several ways to install yarn, you can select one option.

If you have problems in installing *yarn* on your machine, you can also run the application using *npm*. Install [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com). Instead of *yarn* commands below, use *npm* commands like, *npm install*. 

---

## Build & Run the App

Inside the cloned directory, run the following commands.

1. **yarn install**. This will install all the dependencies.
2. **yarn run build-prod**. This will run webpack in production mode.
3. **yarn run serve**. This will run the application on localhost via *live-server* & automatically opens a web browser showing the application running.

## App Walkthrough

Now that you have it running, I would like to explain the architecture of the application. I've used ES6 standard to code this application.

**Webpack**

I've used webpack, a module bundler to run babel & also to build the project. After building, webpack outputs a single JS (bundle.js) file containing all the javascript files & a single CSS (styles.css) containing all the styles.

**Directory Structure**

All the JS code live in */src/* directory. *app.js* is the entry point for the application, all other files are imported when they are necessary. I've added components & other files to their respective sub-directories. This allows us to manage the code easily.     

**Redux**

It's the best way to manage state for our application. Also, by using redux store the code is clean, reusable & scalable.

Redux store is configured in */src/store/configureStore.js* & imported into '*/src/app.js*'.

**Reducers**

1. allCharacters: This reducer stores information about the characters that are being fetched.

**Actions**

1. changePage: Only 10 characters will be retrieved from the API at any given time. This keeps the redux store clean & simple. New characters will be fetched when we move to next page via pagination link which is below the table.

2. searchCharacter: Search feature is provided by text box above the table. Enter the required character name to be searched & press 'Enter' key. Search is powered by API's search parameter.   

**Components**

1. App - This is the main component for the application, where other components are being invoked. Used ReactPaginate library for creating pagination for my app. 
2. Table - Presents the given data in a table.

**Unit Tests**

Test cases are written in */src/tests/*.       

**Styling**

SCSS is used to style the app. I've used bootstrap to import basic styling. Styles live in '*/src/styles*' directory. Compiled into CSS via webpack loaders & separated to a styles.css using '*mini-css-extract-plugin*'.          