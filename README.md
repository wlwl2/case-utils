# case-utils

Utility functions for working with string case in Node.js.

See `docs/types_of_cases.md` for examples and more documentation.

Also see the contents of the `migration` folder for what might happen in 
the future.

## Motivation

### Understanding transformations and the code that does them

The advantage of using this package is that there are a few dependencies 
and string manipulation code can be seen in a single file (index.js).

Understanding what the transformations do is **necessary** and not just helpful.

Transformations should be documented.

At first, you might think you know what transformations are doing,
but consider this:

- Do you remember the names of the cases you are converting from and to?

- Do you remember the difference between 'dashes' and 'hyphens'?

- What happens to **all** and each of the characters after the transformation?
In 9 July 2020, the toStart() function in this package converted
'this is a test' to 'This Is A Test',
but it also converted 'this is a tEST' to 'This Is A Test'. This meant
that, not only was the first character of each word transformed, the others
were too ("EST" to "est").

9 July 2020 Log: The toStart() function name and functionality will probably change.

### Transformation function names
  
**This is not started or complete yet.**
  
Indicates what you are converting from and what you are converting 
to **in the same function name**. 

### A more formal resource

Get all of this done formally, because it's getting annoying even when
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
