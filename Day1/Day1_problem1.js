/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicated = {};
    for (let i = 0; i < nums.length; i++) {
        if (duplicated[nums[i]]) {
            return true;
        }
          duplicated[nums[i]] = true;
    }
    return false
};

