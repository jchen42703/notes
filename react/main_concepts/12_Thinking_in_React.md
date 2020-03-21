# 12. Thinking in React
## Start with a Mock
* Mock up from designer

## 1. Break the UI into a component hierarchy.
1. Start drawing boxes around the components and subcomponents. Make sure that each component (ideally) does a single thing.
2. Arrange them into a hierarchy (i.e. with bullet points)

## 2. Build a static version in React.
__A static version__ of the app is a version __with props__ and __no use of state__. Why no state? State is for data that changes over time or interactivity. We want to have a static version first because it requires the least thinking and the most typing and it __will make sure you have a working component hierarchy__ to play around with.

## 3. Identify the minimal (but complete) representation of UI state
TLDR; Make a list of the absolute minimum number of states you need to pass around. The thought process should be:
* List out all of the data that's going to be passed around.
* Then ask:
  * Is it passed from Parents via props? If yes, probably not a state.
  * Is it unchanging? If yes, probably not a state.
  * Can you compute it based on something else (state/props)? If yes, probably not a state.

## 4. Identify where your state should live.
To figure out where which components should contain the state, do this for __each state:__
* Identify each component that renders something based on a state.
* Find a common ancestor (10. Lifting State Up)
* If you can't find it, make a new component specifically for holding the state and add it to the hierarchy.

## 5. Add inverse data flow.
By this point, you have an application that can render with props and state flowing down. Now, we want to make sure it also supports flowing up (inverse data flow) to check that we actually implemented the data flow correctly.

To do this, you can use callbacks?? idk lol
* https://valmsmith39a.wordpress.com/2016/05/23/inverse-data-flow-in-react/
