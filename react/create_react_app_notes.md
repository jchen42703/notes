# Create-React-App Notes

## [`index.html` and `index.js` connection](https://stackoverflow.com/questions/42438171/create-react-app-index-html-and-index-js-connection)
* Uses webpack
* configuration specifies that Webpack uses `src/index.js` as an "entry point."
  * So that’s the first module it reads, and it follows from it to other modules to compile them into a single bundle.
* When webpack compiles the assets, it produces a single (or several if you use code splitting) bundles.
  * It makes their final paths available to all plugins. We are using one such plugin for __injecting scripts into HTML.__
* We have enabled `html-webpack-plugin` to generate the HTML file. In our configuration, we specified that it should read `public/index.html` as a template. We have also set inject option to true. With that option, __`html-webpack-plugin` adds a `<script>` with the path provided by Webpack right into the final HTML page.__
  * This final page is the one you get in `build/index.html` after running `npm run build`, and the one that gets served from / when you run `npm start`.
* TLDR; Webpack injects the `index.js` script into `index.html`.
