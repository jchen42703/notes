# [Web Storage API](https://flaviocopes.com/web-storage-api/)
* The Web Storage API defines two storage mechanisms: __Session Storage__ and __Local Storage.__
  * Both Session Storage and Local Storage provide a private area for your data.
    * Any data you store cannot be accessed by other websites.
  * __Session Storage__ maintains the data stored into it for the duration of the __page session (session of tab/window).__
    * If multiple windows or tabs visit the same site, they will have two different Session Storage instances.
    * When a tab/window is closed, the Session Storage for that particular tab/window is cleared.
    * Let's you handle tab-wise operations (not like cookies that persist through all tabs and sessions), such as...?
* Both Local Storage and Session Storage are __protocol specific:__ data stored when the page is accessed using `http` is not available when the page is served with `https`, and vice versa.
* Generally ranges from 2 MB to 10 MB of memory depending on the browser and whether it's mobile/desktop
* Accessed through the `window` object and `sessionStorage`/`localStorage` (both return a [Storage object](https://developer.mozilla.org/en-US/docs/Web/API/Storage))

# [Cache API](https://flaviocopes.com/cache-api/)
* cache is a hardware or software component that stores data so that future requests for that data can be served faster
* The __Cache API__ allows you to cache __URL-addressable resources,__ which means assets, web pages, HTTP APIs responses.
  * not meant to cache __individual chunks of data,__ which is the task of the __IndexedDB API.__

# [IndexedDB](https://flaviocopes.com/indexeddb/)
* key/value store (a noSQL database) considered to be the definitive solution for storing data in browsers.
* asynchronous API
* Much larger, some don't have limits (i.e. Firefox just sends a warning when exceeding 50 MB).
* While you can technically create multiple databases per site, you generally create one single database, and inside that database you can create multiple object stores.
* A database is __private__ to a domain, so any other site cannot access another website IndexedDB stores.
* Has complicated API, so it's recommended to use a popular wrapper, such as [db.js](https://github.com/aaronpowell/db.js) and [PouchDB](https://pouchdb.com/).
  * Here is a good stackoverflow Q for choosing which wrapper to use: https://stackoverflow.com/questions/14522868/best-indexeddb-wrappers

# Cookies
Covered in [cookies.md](./cookies.md).
