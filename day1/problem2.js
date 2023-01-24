/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const lookup = {}

  if (s.length !== t.length) return false
  for (let val of s) {
    lookup[val] = (lookup[val] || 0) + 1
  }

  for (let val of t) {
    if (!lookup[val]) {
      return false
    }
    lookup[val] -= 1
  }
  return true
}
