// Preparing for version 1.
// See docs\types_of_cases.md for short explanations of the terminology here.

/**
 * E.g. Converts 'testString' to 'test-string'.
 * Currently also does this for Pascal case so 'TestString' to 'test-string'
 * would also work. What I might do in the future is convert it into camel 
 * case first, or add an error or warning.
 * Beware of the case of "FFF" to "fff", if you want "f-f-f", but it handles
 * "itemID" nicely (returns "item-id"), because it requires a lower case letter 
 * after a upper case letter to add a dash before that upper case letter.
 * "HTML" and "CSS" also work nicely.
 * I feel that you should select what type of conversion you want anyway.
 * What happens when you do "3DObject" or "IOStream"?
 * @param {string} str - Camel (or Pascal) case.
 * @returns {string} Kebab case.
 */
exports.camelToKebab = function (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * Replaces all dashes in a string with a space.
 * E.g. Converts 'test-string' to 'test string'.
 * The case for letters are kept the same as the original input.
 * E.g. "test-STRing" will be "test STRing". Train case works as well as the
 * input (to be fixed). Has a similar problem to the camelToKebab function.
 * @param {string} str - Kebab (or train) case or any combination of cases
 * separated by dashes.
 * @returns {string} All lower case or string with dashes removed.
 */
exports.kebabToAllLower = function (str) {
  return str.replace(/-/g, ' ')
}

/**
 * E.g. Converts 'test string' to 'Test String'.
 * "test strING" to "Test String" also works.
 * Has a similar problem to the camelToKebab function.
 * @param {string} str - All lower case or a string with any combination of
 * cases.
 * @returns {string} Start case.
 */
exports.allLowerToStart = function (str) {
  return str.replace(/\w\S*/g, function (text) { 
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() 
  })
}