# case-utils

Utility functions for working with string case in Node.js.

See `docs/types_of_cases.md` for examples and more documentation.

Also see the contents of the `migration` folder for what might happen in 
the future.

## Motivation

1. The advantage of using this package is that there are a few dependencies 
and the string manipulation code can be seen in a single file (index.js).

Understanding what the transformations do is **necessary** not just helpful
and should be documented.

At first, you might think you know what some transformations are doing,
but think about these considerations:

  - What happens to the other letters after the first letter?
  
  - The difference between 'dashes' and 'hyphens'.
  
  - Do you know what case you are converting from and to?

2. Indicates **what you are converting from** and 
**what you are converting to** in the same function name.
**This will be implemented later. It is not implemented yet.**

3. Get all of this done formally, because it's getting annoying even when
I am writing in C#. See `docs/types_of_cases.md`.

## Installation

```bash
npm i case-utils --save
```

## Usage

**The names of these functions will most likely change in the future.
For now, they kind of work.**

### camelToKebab()

Converts 'thisIsATest' to 'this-is-a-test'.

Currently also does this for Pascal case.

`CaseUtils.camelToKebab(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.camelToKebab('thisIsATest')); // Returns `this-is-a-test`.
```

### removeHyphens()

Converts 'this-is-a-test' to 'this is a test'.

`CaseUtils.removeHyphens(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.removeHyphens('this-is-a-test')); // Returns `this is a test`.
```

### toStart()

Converts 'this is a test' to 'This Is A Test'.

Also: 'this is a tEST' to 'This Is A Test'.

`CaseUtils.toStart(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.toStart('this is a test')); // Returns `This Is A Test`.
```
