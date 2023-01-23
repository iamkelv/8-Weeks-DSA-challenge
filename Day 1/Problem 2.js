/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let sCharac = s.toLowerCase().split('')
    let tCharac = t.toLowerCase().split('')

    sCharac.sort()
    tCharac.sort()

    s = sCharac.join()
    t = tCharac.join()


    if (s === t){
        return true;
    }
    else {
        return false;
    }
    
};