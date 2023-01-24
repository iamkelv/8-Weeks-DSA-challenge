 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const lookUp ={}

 let frequency = {}        
    for (let val of nums) {        
    frequency[val] = (frequency[val] || 0 )+ 1
    if (frequency[val]>1) {
        return true        
    }
}
    return false
  
};