/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let y = s.split("").sort().join("");
    let z = t.split("").sort().join("");
    if (y === z){
        return true
    } else {
        return false
    }
 
 };