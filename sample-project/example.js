const CaseUtils = require('case-utils')

console.log(CaseUtils.camelCaseToHyphenated('thisIsATest'))
console.log(CaseUtils.removeHyphens('this-is-a-test'))
console.log(CaseUtils.toStartCase('this is a test'))

