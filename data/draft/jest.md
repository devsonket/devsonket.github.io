---
id: jest
title: জেস্ট
slug: jest
description: জেস্ট একটি অত্যন্ত সহজ এবং অসাধারণ জাভাস্ক্রিপ্ট টেস্ট ফ্রেমওয়ার্ক
colorPref: #333
---

## টেস্টিং



### শুরু করার জন্য



```bash
yarn add --save-dev jest babel-jest
```



```js
/* Add to package.json */
"scripts": {
  "test": "jest"
}
```

```bash
# Run your tests
yarn test -- --watch
```

দেখুনঃ [Getting started](http://facebook.github.io/jest/docs/en/getting-started.html)

### টেস্ট লেখার জন্য

```js
describe("My work", () => {
  test("works", () => {
    expect(2).toEqual(2);
  });
});
```

দেখুনঃ [describe()](http://facebook.github.io/jest/docs/en/api.html#describename-fn), [test()](http://facebook.github.io/jest/docs/en/api.html#testname-fn), [expect()](http://facebook.github.io/jest/docs/en/expect.html#content)

### BDD সিনট্যাক্স

```js
describe('My work', () => {
  it('works', () => {
    ···
  })
})
```

`it` is an alias for `test`.
দেখুনঃ [test()](http://facebook.github.io/jest/docs/en/api.html#testname-fn)

### সেটাপ

```js
beforeEach(() => { ... })
afterEach(() => { ... })
```

```js
beforeAll(() => { ... })
afterAll(() => { ... })
```

দেখুনঃ [afterAll() and more](http://facebook.github.io/jest/docs/en/api.html#afterallfn)

### টেস্ট ফোকাসিং

```js
describe.only(···)
it.only(···) // alias: fit()
```

দেখুনঃ [test.only](http://facebook.github.io/jest/docs/en/api.html#testonlyname-fn)

### স্কিপিং টেস্ট

```js
describe.skip(···)
it.skip(···) // alias: xit()
```

দেখুনঃ [test.skip](http://facebook.github.io/jest/docs/en/api.html#testskipname-fn)

### অপশনাল ফ্ল্যাগ

#### `--coverage` = See a summary of test coverage
#### `--detectOpenHandles` = See a summary of ports that didn't close
#### `--runInBand` = Run all tests one after the other


## এক্সপেক্ট


### ব্যাসিক এক্সপেকটেশন

```js
expect(value).not.toBe(value).toEqual(value).toBeTruthy();
```

Note that `toEqual` is a deep equality check.
দেখুনঃ [expect()](http://facebook.github.io/jest/docs/en/expect.html#expectvalue)

### স্ন্যাপশটস

```js
expect(value).toMatchSnapshot().toMatchInlineSnapshot();
```

Note that `toMatchInlineSnapshot()` requires Prettier to be set up for the project.
দেখুনঃ [Inline snapshots](https://jestjs.io/docs/en/snapshot-testing#inline-snapshots)

### ইরোর

```js
expect(value).toThrow(error).toThrowErrorMatchingSnapshot();
```

### বুলিয়ান

```js
expect(value).toBeFalsy().toBeNull().toBeTruthy().toBeUndefined().toBeDefined();
```

### নাম্বার

```js
expect(value)
  .toBeCloseTo(number, numDigits)
  .toBeGreaterThan(number)
  .toBeGreaterThanOrEqual(number)
  .toBeLessThan(number)
  .toBeLessThanOrEqual(number);
```

### অবজেক্ট

```js
expect(value)
  .toBeInstanceOf(Class)
  .toMatchObject(object)
  .toHaveProperty(keyPath, value);
```

### অব্জেক্টস

```js
expect(value).toContain(item).toContainEqual(item).toHaveLength(number);
```

### স্ট্রিং

```js
expect(value).toMatch(regexpOrString);
```

### অন্যান্য

```js
expect.extend(matchers);
expect.any(constructor);
expect.addSnapshotSerializer(serializer);

expect.assertions(1);
```

## আরো ফিচার

### অ্যাসিক্রোনাস টেস্ট

```js
test('works with promises', () => {
  return new Promise((resolve, reject) => {
    ···
  })
})
```



```js
test('works with async/await', async () => {
  const hello = await foo()
  ···
})
```



Return promises, or use async/await.
দেখুনঃ [Async tutorial](http://facebook.github.io/jest/docs/en/tutorial-async.html)

### স্ন্যাপশট

```jsx
it("works", () => {
  const output = something();
  expect(output).toMatchSnapshot();
});
```



First run creates a snapshot. Subsequent runs match the saved snapshot.
দেখুনঃ [Snapshot testing](http://facebook.github.io/jest/docs/en/snapshot-testing.html)

### রিয়াক্ট টেস্ট রেন্ডারার

```jsx
import renderer from "react-test-renderer";
```



```jsx
it("works", () => {
  const tree = renderer
    .create(<Link page="http://www.facebook.com">Facebook</Link>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
```



React's test renderer can be used for Jest snapshots.
দেখুনঃ [Snapshot test](http://facebook.github.io/jest/docs/en/tutorial-react-native.html#snapshot-test)

### টাইমার

```js
jest.useFakeTimers();
```

```js
it("works", () => {
  jest.runOnlyPendingTimers();
  jest.runTimersToTime(1000);
  jest.runAllTimers();
});
```

দেখুনঃ [Timer Mocks](http://facebook.github.io/jest/docs/en/timer-mocks.html)

## মক ফাংশন

### মক ফাংশন

```js
const fn = jest.fn();
```

```js
const fn = jest.fn((n) => n * n);
```

দেখুনঃ [Mock functions](http://facebook.github.io/jest/docs/en/mock-functions.html#using-a-mock-function)

### অ্যাসারশন

```js
expect(fn)
  .toHaveBeenCalled()
  .toHaveBeenCalledTimes(number)
  .toHaveBeenCalledWith(arg1, arg2, ...)
  .toHaveBeenLastCalledWith(arg1, arg2, ...)
```

```js
expect(fn)
  .toHaveBeenCalledWith(expect.anything())
  .toHaveBeenCalledWith(expect.any(constructor))
  .toHaveBeenCalledWith(expect.arrayContaining([values]))
  .toHaveBeenCalledWith(expect.objectContaining({ props }))
  .toHaveBeenCalledWith(expect.stringContaining(string))
  .toHaveBeenCalledWith(expect.stringMatching(regexp));
```

### ইন্সটেন্স

```js
const Fn = jest.fn();

a = new Fn();
b = new Fn();
```

```js
Fn.mock.instances;
// → [a, b]
```



দেখুনঃ [.mock property](http://facebook.github.io/jest/docs/en/mock-functions.html#mock-property)

### কলস

```js
const fn = jest.fn();
fn(123);
fn(456);
```

```js
fn.mock.calls.length; // → 2
fn.mock.calls[0][0]; // → 123
fn.mock.calls[1][0]; // → 456
```



দেখুনঃ [.mock property](http://facebook.github.io/jest/docs/en/mock-functions.html#mock-property)

### রিটার্ন ভ্যালুস

```js
const fn = jest.fn(() => "hello");
```

#### অথবা:

```js
jest.fn().mockReturnValue("hello");
jest.fn().mockReturnValueOnce("hello");
```

### মক ইমপ্লিমেনশন

```js
const fn = jest
  .fn()
  .mockImplementationOnce(() => 1)
  .mockImplementationOnce(() => 2);
```



```js
fn(); // → 1
fn(); // → 2
```

## রেফারেন্স



- <https://devhints.io/jest>
  

- <http://facebook.github.io/jest/>
  
