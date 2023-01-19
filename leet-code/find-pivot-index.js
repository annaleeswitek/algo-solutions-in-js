// Given an array of integers nums, calculate the pivot index of this array

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum
// of all the numbers strictly to the index's right. 
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the elft. 
// this also applies to the right edge. 

// return the leftmost pivot index. If no such value exists, retun -1.

const findPivotIndex = (nums) => {
    let sum = nums.reduce((acc, curr) => acc + curr); 
    let leftSum = 0; 

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i; 
        }
        leftSum += nums[i];
    }
    return -1;

}

const nums = [1, 7, 3, 6, 5, 6];

console.log(findPivotIndex(nums))
// for nums, the pivot index is 3
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11


// Solution: 
// Sum of all the numbers in the array - nums[i] - leftsum 
// we only really need to know about the leftsum to check whether an index is a pivot index. 
// as we iterate through candidate indexes i, we will maintain the correct value of leftsum. 


