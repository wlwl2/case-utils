# case-utils

Utility functions for working with string case in Node.js. 

The advantage of using this package is that there are a few dependencies 
and the string manipulation code can be seen in a single file (index.js).

This package includes a function that for example:

1. Converts 'testString' to `test-string`.

2. Converts 'test-string' to 'test string'.

3. Converts 'test string' to 'Test String'.

This was originally meant to convert 'camelCase' strings I 
had to 'Title Case'.

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
