# case-utils

Utility functions for working with string case in Node.js. Also contains some
documentation on cases.

## Motivation

1. The advantage of using this package is that there are a few dependencies 
and the string manipulation code can be seen in a single file (index.js).

2. Indicates **what you are converting from** and 
**what you are converting to** in the same function name.

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

### camelCaseToDash()

Converts 'testString' to `test-string`.

`CaseUtils.camelCaseToDash(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.camelCaseToDash('testString')); // Returns `test-string`.
```

### removeDashes()

Converts 'test-string' to 'test string'.

`CaseUtils.removeDashes(string)` accepts a string as an argument and 
returns a string.

#### Example:

```js
const CaseUtils = require('case-utils');

console.log(CaseUtils.removeDashes('test-string')); // Returns `test string`.
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
