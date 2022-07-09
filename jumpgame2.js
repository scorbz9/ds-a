// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.



// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2


// Constraints:

// 1 <= nums.length <= 104
// 0 <= nums[i] <= 1000

var jump = function(nums) {

    if (nums.length <= 1) return 0;

    // ladder is the farthest right index we can reach from a given index
    let ladder = nums[0];
    // steps keep track of when we reach the end of the current ladder
    let stairs = nums[0];

    let jumpCount = 1;

    for (let i = 1; i < nums.length; i += 1) {
        console.log('index =', i, 'ladder =', ladder, 'stairs =', stairs)
        // case for when we perfectly have enough steps to reach end of array
        if (i === nums.length - 1) {
            console.log('end of array! result =', jumpCount)
            return jumpCount;
        }

        // keeps track of farthest right index possible that we've encountered
        if (nums[i] + i > ladder) {
            ladder = nums[i] + i;
        }

        // keeps track of progress through current ladder;
        stairs--;

        // when we reach the end of current ladder, we jump to the longest one we've found
        if (stairs === 0) {
            jumpCount += 1;
            console.log('new jump! total jumps =', jumpCount)
            stairs = ladder - i;
            console.log('new stairs count =', stairs)
        }
    }

    return jumpCount;

};
