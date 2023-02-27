// Converts 'thisIsATest' to 'this-is-a-test'.
exports.camelToKebab = function (str) {
  var a = str.replace(/([A-Z])([A-Z])([a-z])/g, function (match, p1, p2, p3) {
    return `${p1}-${p2}${p3}`
  })
  var b = a.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  return b
}

// Converts 'this-is-a-test' to 'this is a test'.
exports.removeHyphens = function (str) {
  return str.replace(/-/g, ' ')
}

// Converts 'this is a test' to 'This Is A Test'.
exports.toStart = function (str) {
  return str.replace(/\w\S*/g, function (text) { 
    return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase() 
  })
}