exports.camelCaseToDash = function (str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

exports.toTitleCase = function (str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}

exports.removeDashes = function (str) {
  return str.replace(/-/g, ' ')
}