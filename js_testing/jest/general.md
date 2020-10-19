# Jest
* Javascript testing API

## Naming Conventions
1. Put all tests in a `/test` directory.
  * Usually for integration testing (verifying interfaces between components)
2. Putting all your test code next to the files they are testing
  * i.e. `index.test.js` in the same directory as `index.js`
  * Usually for unit tests.
---
* Include the type of test in the name of the file
  * Example: `index.unit.test.js` and `api.int.test.js`

## Getting Started
* https://jestjs.io/docs/en/getting-started

1. Install Jest.
2. Create the test file.
3. Add the test command to `package.json`.
```
{
  "scripts": {
    "test": "jest"
  }
}
```
4. Run the test command with `yarn test` or `npm run test`.

## [Matchers](https://jestjs.io/docs/en/using-matchers)
* Look like this:
```
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
* Refer to documentation for more information.

## [Testing Asynchronous Code](https://jestjs.io/docs/en/asynchronous)
* Can just use `async/await` or promises with `.resolve/.reject`

## [Setup and Teardown](https://jestjs.io/docs/en/setup-teardown)
* `beforeEach`, `afterEach` and the `beforeAll`, `afterAll` setup functions take a callback that does the setup work before and after tests run.

### Scoping
* By default, the before and after blocks apply to every test in a file. You can also group tests together using a describe block. __When they are inside a `describe` block, the `before` and `after` blocks only apply to the tests within that `describe` block.__
  * Note: If the setup calls are defined prior to the describe statement itself, then they will still be call in the `describe` statement.

```
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
test('', () => console.log('1 - test'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

// 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach

// 2 - beforeAll
// 1 - beforeEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
// 1 - afterEach
// 2 - afterAll
// 1 - afterAll
```
* If you have a test that often fails when it's run as part of a larger suite, but doesn't fail when you run it alone, it's a good bet that something from a different test is interfering with this one.
