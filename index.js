// Converts 'testString' to 'test-string'.
exports.camelCaseToDash = function (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Converts 'test-string' to 'test string'.
exports.removeDashes = function (str) {
  return str.replace(/-/g, ' ')
}

// Converts 'test string' to 'Test String'.
exports.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (text) { return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() })
}