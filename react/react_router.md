# React Router Notes
For abstracting navigation (lets you display different pages for different URLs).

## TLDR
* Wrap everything in `BrowserRouter`

```
<Router>
  <div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
</Router>
```
* `Route` for linking the component to a URL:

```
<Route path='/g/:gistId' component={Gist}/>

const Gist = ({ match }) => (
  <div>
    {match.params.gistId}
  </div>
)
```

* `Switch` to the render the first one that matches the current URL:

```
<Switch>
  <Route exact path="/register" component={Registration} />
  <Route exact path="/login" component={Login} />
</Switch>
```

* `Redirect` for forcing naviation using its `to` prop:

```
<Redirect from="/" to="login" />
```
