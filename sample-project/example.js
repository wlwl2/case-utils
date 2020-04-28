const CaseUtils = require('case-utils')

console.log('camelToKebab() results:')
console.log(CaseUtils.camelToKebab('thisIsATest'))
console.log(CaseUtils.camelToKebab("itemID"))
console.log(CaseUtils.camelToKebab("IsACollider"))
console.log(CaseUtils.camelToKebab("PositionX"))
console.log(CaseUtils.camelToKebab("PlayerID"))
console.log(CaseUtils.camelToKebab("IDPlayer"))
console.log(CaseUtils.camelToKebab("thisIsATest"))

console.log('removeHyphens() results:')
console.log(CaseUtils.removeHyphens('this-is-a-test'))

console.log('toStart() results:')
console.log(CaseUtils.toStart('this is a test'))

