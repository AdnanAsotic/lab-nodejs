Use EditorConfig to enforce same styling

Packagemanagers
Bower (irrelevant), NPM (bundling and so on - recomendation), JSPM (interesting with repository)

Security Scanning
retire.js, Node Security Platform (call nsp check in build)

Servers:
http-server, lightweight, express (configurable in production => recomended), browsersync (can be used to show process)

Sharing Work-in-progress
localtunnel (recommended), ngrok, surge, now

```
lt --port 3000 --subdomain cory
```

## Automation:

- grunt (writes intermediary files between steps, large plugin ecosystem), 
- gulp (more modern and works in memory streams - pipes, fast, code over configuration, popular), 
- npm scripts (easy, leverage os commandline, npm directly usable, over hooks, simpler debugging, better docs) - check package.json

```Javascript
  // example
  npm start
  npm run start

  // scripts prefixed with pre will run prior to task
  // scripts prefixed with post will run after task
  // with scripts modules have not to be installed globally
```

## Transpiling

- Over 100 different libraries
- TypeScript (ES6, ES5, enhancements, annotations, autocomplete, refactoring, additional features)
- Babel (newest features of JavaScript, Standardized JS - recommended ?) => BABEL-NODE
- Elm

## BUNDLING

Package for target environment.

- 5 different formats (GLOBAL-EVIL, IIFE, AMD, CJS, UMD, ES6 - recommended)
- RequireJS (AMD), Browserify, WebPack (more than just JS - CSS, IMAGES ETC.)

## LINTING

- ES LINT
- Format (seperate config .eslintrc.json)
- Rules
- Warnings or Errors
- Plugins
  - plugins specific to specific framework (react, nodejs, angularjs)
- Preset ?
  - use to blueprint to not start from scratch
  - use standard to get started
- Watch
  - eslint-loader
  - eslint-watch (recomended as this is a wrapper over eslint - standalone)

## TESTING & CONTINOUS INTEGRATION

- Testing Framework (Mocha)
  - Mocha (most popular)
  - Jasmine (assertion library builtin)
  - Tape (simplest)
  - QUnit (oldest-jQuery)
  - AVA (new framework-runs in parallel)
  - Jest (Facebook)
- Assertion Libraries (Chai)
  - Declare what to expect
  - Mocha got not library
  - chaijs (recommended, popular)
  - shouldjs
  - expect
- Helper Libraries (JSDOM)
  - JSDOM (simulate browsers dom without browser)
  - Cheerio (jQuery for the server, use with JSDOM)
- Where to Run Tests (Node)
  - Browser (Karma, Testem) -slow
  - Headless browser (PhantomJS - running V8 engine, fast -recommended)
  - In Memory (JSDOM)
- Where to put Test Files (Alongside)
  - Centralized
    - All tests are seperated from source code (avoids noise ?)
  - Alongside (best practice)
    - Tests are kept with source codes
    - Easy imports
- When Should Tests run (Upon save)
  - Unit tests should run every time save is pressed (TDD)
  - Unit tests should run extremely fast !
- Continous integration
  - TravisCI (most popular -hosted https://travis-ci.org/), Appveyor (appveyor.com), Jenkins, CircleCI, Semaphore, SnapCI 
  - When working in collaboration with others
  - Catches Problems with commiting, forgetting package.json change.
  - Node version conflict
  - Bad merge ?
  - Someone didn't run tests ?

## HTTP CALLS

- NODE => http, request
- Browser => XMLHttpRequest (browser), jQuery, framework based, fetch
- isomorphic-fetch, xhr, superagent, axios
- api calls should be handled in a single spot
- show awareness
- handle errors
- fetch (best practice)
  - polyfill with http://polyfill.io

### MOCK HTTP CALLS

- Unit Testing
- When Webservices aren't yet completed
- Rapid Prototyping
- Framework: Nock
  - Declare Schema (JSON Schema Faker) - https://json-schema.org
  - Generate random data (faker.js, chance.js, randexp.js)
  - JSON Server to serve data via API. (supports CRUD)

## PROJECT STRUCTURE

- Add DEMO APP so expectations can be communicated.
- Examples for Directory usage, Framework usage, Test usage etc...
- Tips
  - Put JS in .js
  - Don't implement JavaScript in Server ? 
  - Inject JSON from Server to Client
  - Organize by Feature and not by File type in larger projects.
  - Extract logic to POJOs
  - react-slingshot as example


## PRODUCTION BUILD

- Enable GZIP
- Build Webpack
- Dynamic HTML
  - Manipulate HTML for production (automatically generate bundlenames)
  - Minify
  - html-webpack-plugin
- Bundle Splitting for larger APPs
  - Split for Client Pages (Avoid re-downloading all libraries)
- Far future headers
  - bust cache must be done
- Error Tracking
  - TrackJS
- Templating
  - Jade, EJS (Embedded JS)

## DEPLOY

- Split UI and API
- Static files are easy to deploy, scale etc.
- Seperate teams can work on UI and API so there is less to understand.
- Backend can be scaled differently
- Cheap UI hosting
- UI can be hosted from CDN so more speed is there
- For Backend can be built in different language

### Cloud Hosting

- AWS
- AZURE
- HEROKU (API)
  - Integrates with GITHUB
- FIREBASE
- GOOGLE CLOUD
- STATIC
  - NETLIFY
  - GITHUB PAGES
  - SURGE (UI)

