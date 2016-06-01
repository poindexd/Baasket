# Baasket
Explore backend services and estimate costs. Baasket is an open-source project released under the MIT License.

## Getting Started
### Install

`npm install`

### Run

`gulp`

The server runs on localhost:8000

## Dev Notes
Baasket is an Angular 1.4 app that uses the [Materialize CSS Framework](http://materializecss.com). The Angular app is in js/app.js. Gulp is used to minify jade/html, sass/css, and js to dist folder, lint and watch.

### GitHub Pages
The site lives at `https://poindexd.github.io/baasket`. To update to the site, push to master, then subtree push the dist folder to gh-pages branch:

`git subtree push --prefix dist origin gh-pages`

### Webhook CMS
Baasket uses [Webhook CMS](http://webhook.com) to allow contributors to add/edit content. That content is stored in Firebase. The Angular app uses Firebase's API to read the data. The Webhook files are not in this repo, but the CMS can be accessed [here](http://baasket.webhook.org/cms). You will need a login, which you can get from Dan (poindexd@umich.edu).
