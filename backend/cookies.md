# Cookies (HTTP cookies)

## [Browser Cookies: What Are They & Why Should You Care?](https://www.whoishostingthis.com/resources/cookies-guide/)
* Cookies are __small bits of data stored as text files on a browser.__

### Layman's Guide to Cookies
#### Intro
* Cookies necessarily contain, at a minimum, two pieces of data: a unique user identifier and some information about that user.
* __Session cookies:__ short-term cookies (stored in the browser's memory
until the browser is closed)
  * i.e. used to keep track of shopping cart
* __Persistent cookies:__ long-term cookies that are tagged by the issuer with an expiration date
  * i.e. "Remember Me" generates a cookies
  * Can track your activity across multiple sites (if those sites use some resource from the site that generated the cookie)
    * i.e. Google/Facebook
* __First-party cookies:__ cookies created by the site you are currently visiting
* __Third-party cookies:__ cookies added by a domain that is not the domain you are currently on
  * i.e. cookies on a website from an advertising to track where the user came when they clicked on an ad

#### User Beware: Cookie Risk and Reward
* __Cookie Fraud__
  * In virtually all cases of cookie fraud, cookies are used to either __falsify the identity of legitimate users__ or to __use the legitimate user’s identity to perform malicious actions.__
  * Common cookie fraud exploits:
    * __Cross-site scripting (XSS):__
      * user visits malicious website and receives a malicious cookie that contains a script payload targeting a different website
      * When the user visits the targeted site, the malicious cookie (disguised as a regular cookie) is sent to the server hosting the targeted site.
      * Storing JWTs in `httpOnly` cookies protects against XSS attacks because ?? Look at [this](https://medium.com/redteam/stealing-jwts-in-localstorage-via-xss-6048d91378a0)
    * __Session fixation:__
      * a user __receives__ a malicious cookie that contains the cookie issuer’s session ID.
      * __When the user attempts to log into a targeted domain,__ the issuer’s session ID is logged in instead of the user’s session ID
      (falsifies the identity of legit users).
    * __Cross-site request forgery (XSRF):__
      * a user visits a legitimate site and receives a legitimate cookie.
      * __The user then visits a malicious site that instructs the user’s browser to perform some action targeting the legitimate site.__
      * The legitimate site receives the request along with the legitimate cookie and performs the action since it appears to be initiated by a legitimate user (uses the legit identity to perform some malicious actions).
    * __Cookie tossing attack:__
      * a user visits a malicious site that provides a cookie designed to look like it originated from a __subdomain of a targeted site__, such as http://subdomain.example.com.
      * When the user visits the targeted site, http://example.com in this case, the subdomain cookie is sent along with any legitimate cookies. __If the subdomain cookie is interpreted first, the data in that cookie will overrule the data contained in any subsequent legitimate cookies.__

### A Developer’s Guide to Using Cookies
#### Technical Intro to Implementing Cookies
* Cookies are created when a web server tells a browser to create the cookie. The instructions for creating the cookie are usually sent in an HTTP header and look something like this:
`Set-Cookie: <cookie_name>=<cookie_value>`
* Cookies may also be created with client-side JavaScript by using the `document.cookie` method.
* Once a cookie has been created by a browser and the browser makes a subsequent request of the same domain, the browser will send back any __cookies belonging to that domain__ as part of the request.
* The cookie in the example above is a __session cookie.__ Persistent cookies are created by adding an Expires attribute to the Set-Cookie header. In addition to Expires, several other attributes can be used to control how browsers treat cookies:
  * Cookies tagged with the `Secure` attribute will only be sent if the request from the browser is transmitted over an encrypted protocol (https).
  * Cookies flagged as `HttpOnly` will be inaccessible to JavaScript within the webpage DOM and will only be transmitted back to the issuing domain.
  * The `SameSite` flag is a relatively new attribute that ensures that cookies will only be transmitted back to the same website from which they originated.
* __Cookies and the Law__
  * __EU Cookie Law:__ what started out as an EU directive was later incorporated into law by every country in the EU. In short, the cookie law says that __if you’re based in the EU or target consumers in the EU you must get permission from users in order to use cookies.__
  * __FTC Disclosure Requirements:__ says that you need to let your site visitors know that you're using cookies for third-party tracking for the purpose of advertising and affiliate sales.
  * __Privacy Policy Requirements:__ several countries, including the United States, the UK, Australia, and every country in the EU, require that you let users know what you’re doing with their personal data. If you use cookies in any way to track user activity, including using analytics cookies to track visitor traffic, __you are required by law to publish a privacy policy explaining what data you collect and how you use it.__
  * __To comply:__
    * If you’re based in the EU or targeting EU consumers, make sure that __you give them the opportunity to acknowledge that your site uses cookies.__
    * If you allow paid advertisements or the placement of affiliate ads on your site, __disclose that information on your website in an obvious manner.__
    * If you track user activity or collect any user data, __provide a comprehensive privacy policy explaining what data you gather and how it’s used.__

## [Learn how HTTP Cookies work](https://flaviocopes.com/cookies/)
### Intro
* For customizing user sessions (letting servers recognize the user).
* Cookies are sent by the browser when an HTTP request starts
  * And the server (which can edit the cookies) sends them back
* __Cookies are essentially used to store a session id.__
* __Restrictions of Cookies:__
  * can only store __4 KB of data__
  * __private to the domain__ (site can only read cookies from its own domain)
  * up to 20 cookies (depends on browser)
    * If exceeded, newer cookies replace older ones
* Good abstraction library for the JS interface is [`js-cookie`](https://github.com/js-cookie/js-cookie)
* You can use cookies to build session based authentication systems

## [Cookies v. Tokens](https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide)
### Recap
![](../images/cookie-token-auth.png)
...

## [How to store a JWT token inside an HTTP only cookie?](https://stackoverflow.com/questions/39810741/how-to-store-a-jwt-token-inside-an-http-only-cookie)
...
