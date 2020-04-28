# case-utils

Utility functions for working with string case in Node.js.

See `docs/types_of_cases.md` for examples and more documentation.

## Motivation

1. The advantage of using this package is that there are a few dependencies 
and the string manipulation code can be seen in a single file (index.js).

Understanding what the transformations do is **necessary** not just helpful
and should be documented.

At first, you might think you know what some transformations are doing,
but think about these considerations:

  - What happens to the other letters after the first letter?
  
  - The difference between 'dashes' and 'hyphens'.

2. Indicates **what you are converting from** and 
**what you are converting to** in the same function name.
**This will be implemented later. It is not implemented yet.**

3. Get all of this done formally, because it's getting annoying even when
I am writing in C#. See `docs/types_of_cases.md`.

## Features

1. Converts 'testString' to 'test-string'.

2. Converts 'test-string' to 'test string'.

3. Converts 'test string' to 'Test String'.

## Installation

```bash
npm i case-utils --save
```

## Usage

### camelCaseToHyphenated()

Converts 'testString' to `test-string`.

Currently also does this for Pascal case.

`CaseUtils.camelCaseToHyphenated(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.camelCaseToHyphenated('testString')); // Returns `test-string`.
```

### removeHyphens()

Converts 'test-string' to 'test string'.

`CaseUtils.removeHyphens(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.removeHyphens('test-string')); // Returns `test string`.
```

### toTitleCase()

Converts 'test string' to 'Test String'.

`CaseUtils.toTitleCase(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.toTitleCase('test string')); // Returns `Test String`.
```
