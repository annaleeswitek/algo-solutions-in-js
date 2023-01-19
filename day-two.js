// Given an array of integers, return a new array such that each element at index i 
// of the new array is the product of all the numbers in the original array except the one at i

// ex: if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]
// If our output was [3, 2, 1] the expected output would be [2, 3, 6]


const array = [1, 2, 3, 4, 5]

const runningProduct = (arr) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        const arrCopy = [...arr]
        arrCopy.splice(i, 1)
        result.push(arrCopy.reduce((accumulator, currentVal) => accumulator * currentVal));
    }

    return result;
}

console.log(runningProduct(array)) // logs [120, 60, 40, 30, 24]

// Tricky things I encountered: only thing is you need to make a copy of the array before splicing, not just 
// adding a reference to the original array. 
// const arrCopy = arr; <-- this lead to to the original array being mutated by the splice method. 
// const arryCop = [...arr] <-- this makes a true copy of the array with no reference to the original
// so you can splice away. 