function quadratic (a, b, c) {
  var result
  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    var delta = Math.pow(b, 2) - 4 * (a * c)
    if (delta < 0) {
      return null
    } else if (delta === 0) {
      result = (b * -1) / (2 * a)
      return result
    } else if (delta > 0) {
      var arr = []
      var first = ((b * -1) + Math.sqrt(delta)) / (2 * a)
      var second = ((b * -1) - Math.sqrt(delta)) / (2 * a)
      arr.push(first.toFixed(2), second.toFixed(2))
      return arr
    }
  } else {
    return false
  }
}
