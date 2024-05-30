console.log("Binary search");

// let steps = [];

function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseFloat(element));
    inputArray = inputArray.filter(element => !isNaN(element));
    return inputArray;
}

function binarySearch(arr, target) {
    // Clear the steps array for each new search
    steps = [];
    steps.push("Original array: " + arr.join(' '));
    steps.push(`Target is : ${target}`);

    // Create an array of objects with elements and their original indices
    const indexedArr = arr.map((element, index) => ({ element, index }));

    // Sort the array based on element values
    indexedArr.sort((a, b) => a.element - b.element);

    let string="Sorted array =[ ";
    for (const ele of indexedArr) {
        string += `${ele.element} , `;
    }
    string += `]`;
    steps.push(string);

    let left = 0;
    let right = indexedArr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        steps.push(`Mid = ${mid} with value ${indexedArr[mid].element}`);

        // Check if target is present at mid
        if (indexedArr[mid].element === target) {
            steps.push(`Target found at index ${mid}`);
            return indexedArr[mid].index; // Return original index
        }
        // If target is greater, ignore left half
        if (indexedArr[mid].element < target) {
            steps.push("Target is greater, moving to the right half.");
            left = mid + 1;
            steps.push(`Right half: [${indexedArr.slice(mid + 1, right + 1).map(obj => obj.element)} ]`);
        }
        // If target is smaller, ignore right half
        else {
            steps.push("Target is smaller, moving to the left half.");
            right = mid - 1;
            steps.push(`Left half: [ ${indexedArr.slice(left, mid).map(obj => obj.element)} ]`);
        }
    }

    // If target is not present in the array
    steps.push("Target not found in the array.");
    return -1;
}
document.getElementById('search-button').addEventListener('click', function () {
    const inputArray = getInputArray();
    const target = parseInt(prompt("Enter the element to search for:"));

    const index = binarySearch(inputArray, target);

    // Reference to the display-array element
    const display = document.getElementById('display-array');
    display.innerHTML="";

    // Display each step with a delay
    if (index !== -1) {
        steps.push(`Target ${target} found at index ${index} with respect to the original array.`);
    } else {
        steps.push(`Element ${target} not found in the array`);
    }
    for (let i = 0; i < steps.length; i++) {
        setTimeout((step) => {
            let div = document.createElement('div');
            div.innerHTML = step;
            let icon = document.createElement('i');
            icon.className = 'fa-solid fa-angles-down';
            display.appendChild(icon);
            display.appendChild(div);
        }, i * 1000, steps[i]); // Add delay for each step
    }

    // Display the final result after all steps
});
function main() {
    const arr = [23, 34, 55, 66, 70, 80, 90, 31,94,12,14, 72,81,9];
    target = 94;
    const index = binarySearch(arr, target);

    // Reference to the display-array element
    const display = document.getElementById('display-array');

    // Display each step with a delay
    if (index !== -1) {
        steps.push(`Element ${target} found at index ${index}`);
    } else {
        steps.push(`Element ${target} not found in the array`);
    }

    for (let i = 0; i < steps.length; i++) {
        setTimeout((step) => {
            let div = document.createElement('div');
            div.innerHTML = step;
            let icon = document.createElement('i');
            icon.className = 'fa-solid fa-angles-down';
            display.appendChild(icon);
            display.appendChild(div);
        }, i * 1000, steps[i]); // Add delay for each step
    }

    // Display the final result after all steps
}
main();
