let text = '  "  Nothing will work unless you do   "  ';

// Define the regular expression pattern
let pattern = /"\s*(.*?)\s*"/;

// Use replace() to remove leading and trailing whitespace
let result = text.replace(pattern, '"$1"');

console.log("Original string:", text);
console.log("Result after removing whitespace:", result);

// function binarySearch(arr, target) {
//     // Create an array of objects with elements and their original indices
//     const indexedArr = arr.map((element, index) => ({ element, index }));

//     // Sort the array based on element values
//     indexedArr.sort((a, b) => a.element - b.element);

//     console.log("Sorted array with original indices:", indexedArr);
//     for (const ele of indexedArr) {
//         console.log(ele.element);
//     }

//     let left = 0;
//     let right = indexedArr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         console.log("Mid = ", mid, "with value", indexedArr[mid].element);

//         // Print the left and right halves of the array


//         // Check if target is present at mid
//         if (indexedArr[mid].element === target) {
//             console.log("Target found at index", mid);
//             return indexedArr[mid].index; // Return original index
//         }

//         // If target is greater, ignore left half
//         if (indexedArr[mid].element < target) {
//             console.log("Target is greater, moving to the right half.");
//             console.log("Right half:", indexedArr.slice(mid + 1, right + 1).map(obj => obj.element));
//             left = mid + 1;
//         }
//         // If target is smaller, ignore right half
//         else {
//             console.log("Target is smaller, moving to the left half.");
//             console.log("Left half:", indexedArr.slice(left, mid + 1).map(obj => obj.element));
//             right = mid - 1;
//         }
//     }

//     // If target is not present in the array
//     console.log("Target not found in the array.");
//     return -1;
// }

// // Example usage:
// const arr = [64, 34, 25, 12, 22, 11, 90];
// const target = 64;
// console.log("Searching for target", target, "in array:", arr);
// const resultIndex = binarySearch(arr, target);
// if (resultIndex !== -1) {
//     console.log(`Target ${target} found at index ${resultIndex} with respect to the original array.`);
// } else {
//     console.log(`Target ${target} not found in the array.`);
// }
