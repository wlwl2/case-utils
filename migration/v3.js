// Preparing for the future.
// See docs\types_of_cases.md for short explanations of the terminology here.

/**
 * E.g. Converts 'thisIsATest' to 'this-is-a-test'.
 * Currently also does this for Pascal case so 'ThisIsATest' to 'this-is-a-test'
 * would also work. What I might do in the future is convert it into camel 
 * case first, or add an error or warning.
 * Beware of cases like "FFF" if you want "f-f-f".
 * @param {string} str - Camel (or Pascal) case.
 * @returns {string} Kebab case.
 */
exports.camelToKebab = function (str) {
  var a = str.replace(/([A-Z])([A-Z])([a-z])/g, function (match, p1, p2, p3) {
    return `${p1}-${p2}${p3}`
  })
  var b = a.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return b
}

/**
 * Replaces all dashes in a string with a space.
 * E.g. Converts 'this-is-a-test' to 'this is a test'.
 * The case for letters are kept the same as the original input.
 * E.g. "this-tEST" will be "this tEST". Train case works as well as the
 * input (to be fixed). No error or warnings added yet.
 * @param {string} str - Kebab (or train) case or a string with any 
 * combination of cases separated by dashes.
 * @returns {string} All lower case or string with dashes removed.
 */
exports.kebabToAllLower = function (str) {
  return str.replace(/-/g, ' ')
}

/**
 * E.g. Converts 'this is a test' to 'This Is A Test'.
 * "this tEST" to "This Test" also works.
 * No error or warnings added yet.
 * @param {string} str - All lower case or a string with any combination of
 * cases.
 * @returns {string} Start case.
 */
exports.allLowerToStart = function (str) {
  return str.replace(/\w\S*/g, function (text) { 
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() 
  })
}