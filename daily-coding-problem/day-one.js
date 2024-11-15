// Given a list of numbers and a number k, return whether any two numbers from the list add up to k
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 = 17
// BONUS: Can you do this in one pass? 

const nums = [1, 5, 10, 7];
const k = 17; 

const twoSumBruteForceBloop = (nums, k) => {
    
    for (let i = 0; i < nums.length; i++) {
        console.log('nums[i]', nums[i])
        for (let j = 1; j < nums.length; j++) {
            console.log('nums[j]', nums[j])
            if (nums[i] + nums[j] === k) {
                return true;
            }
        }
    }
    return false;
}

const twoSumLinear = (nums, k) => {
    const seen = new Set(); 
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(k-nums[i])) {
            return true;
        } else {
            seen.add(nums[i])
        }
    }

    return false;

    // awkward version I tried with map - for loop is needed to make this linear complexity

    // const result = nums.map(num => {
    //     if (seen.has(k-num)) {
    //         return true;
    //     } else {
    //         seen.add(num)
    //     }
    // })

    // if (result.includes(true)) {
    //     return true;
    // } else {
    //     return false;
    // }
}

// console.log(twoSumBruteForce(nums, k)) // this is O(n^2) quadratic complexity

console.log(twoSumLinear(nums, k))
