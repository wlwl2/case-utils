const CaseUtils = require('case-utils')

console.log(CaseUtils.camelCaseToDash('testString')) // Returns `test-string`.

console.log(CaseUtils.removeDashes('test-string')) // Returns `test string`.

console.log(CaseUtils.toTitleCase('test string')) // Returns `Test String`.

