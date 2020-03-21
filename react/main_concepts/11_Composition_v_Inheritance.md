# 11. Composition vs. Inheritance
Use composition instead of inheritance for React! This section of the documentation aims to show common cases where peeps use inheritance but should be using composition instead.

## Containment
For components that use don't know their children classes beforehand (i.e. `Sidebar` or `Dialog` that represent __general boxes__) use `props.children` to pass children elements into their elements:
```
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

// can now pass arbitrary children by nesting the JSX in the `general box tax`
function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```
So...what's going on? The JSX nested in `FancyBorder` is passed as `props.children`. So...when `FancyBorder` renders `props.children`, it renders the JSX you nested in it.

When you need multiple "holes" or "slots" to compose the JSX, you can make up your own keywords instead of just using `.children`:
```
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      } />
  );
}
```
Here, the keywords are `left` and `right`.

## Specialization
When you want to make a specific version of a component, render the generic component with props that make it the specialized one:
```
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```
Here, we render `WelcomeDialog` with `Dialog` and the props, `title` and `message`.
