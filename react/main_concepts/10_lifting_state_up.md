# 10. Lifting State Up
When several components need to show the same changing data (i.e. the temperate and you need the boiler and thermostat to show the temperature), "lift up" the state to their closest common ancestor.

For example, the given example showcases three components:
`Calculator`, `BoilingVerdict` and `TemperatureInput`.
* `BoilingVerdict` and `TemperatureInput` are nested under `Calculator`.
* `BoilingVerdict` and `TemperatureInput` both need to know the `temperature`.
  * But...`Calculator` doesn't know anything about the temperature so it can't sync up `BoilingVerdict` and `TemperatureInput`
  * So...__lift the state (temperature) up into `Calculator`__
  * Basically, pass the __state (temperature)__ as a __prop__ from `Calculator` to `BoilingVerdict` and `TemperatureInput` instead of having it as a state for both `BoilingVerdict` and `TemperatureInput`.

You can use [__React Developer Tools__](https://github.com/facebook/react/tree/master/packages/react-devtools) to inspect props and inspect the component responsible for updating the state. If you have multiple components, this will make finding the source of bugs more difficult.

## TLDR
* Make sure that there is __a single source of truth__ for any data that changes in React.
  * Make sure that the common ancestor (the class that uses all of the components that share the changing state) has the state and passes it down as props to those components
