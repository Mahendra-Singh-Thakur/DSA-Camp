console.log("Binary search");
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseFloat(element));
    inputArray = inputArray.filter(element => !isNaN(element));
    return inputArray;
}
function binarySearch(arr, target) {
    steps = [];
    steps.push("Original array: [ " + arr.join(' , ') + " ]");
    steps.push(`Target is : ${target}`);
    const indexedArr = arr.map((element, index) => ({ element, index }));
    indexedArr.sort((a, b) => a.element - b.element);
    const sortedElements = indexedArr.map(obj => obj.element);
    steps.push("Sorted array: [ " + sortedElements.join(' , ') + " ]");
    let left = 0;
    let right = indexedArr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        steps.push(`Mid = ${mid} with value ${indexedArr[mid].element}`);
        if (indexedArr[mid].element === target) {
            steps.push(`Target found at index ${mid}`);
            return indexedArr[mid].index;
        }
        if (indexedArr[mid].element < target) {
            steps.push("Target is greater, moving to the right half.");
            left = mid + 1;
            steps.push(`Right half: [ ${indexedArr.slice(mid + 1, right + 1).map(obj => obj.element)} ]`);
        }
        else {
            steps.push("Target is smaller, moving to the left half.");
            right = mid - 1;
            steps.push(`Left half: [ ${indexedArr.slice(left, mid).map(obj => obj.element)} ]`);
        }
    }
    steps.push("Target not found in the array.");
    return -1;
}
function main() {
    const arr = [23, 34, 55, 66, 70, 80, 90, 31, 94, 12, 14, 72, 81, 9];
    target = 94;
    const index = binarySearch(arr, target);
    const display = document.getElementById('display-array');
    if (index !== -1) {
        steps.push(`Element ${target} found at index ${index}`);
    } else {
        steps.push(`Element ${target} not found in the array`);
    }
    for (let step of steps) {
        let div = document.createElement('div');
        div.innerHTML = step;
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-angles-down';
        display.appendChild(icon);
        display.appendChild(div);
    }
}
document.getElementById('search-button').addEventListener('click', function () {
    const inputArray = getInputArray();
    const target = parseInt(prompt("Enter the element to search for:"));
    const index = binarySearch(inputArray, target);
    const display = document.getElementById('display-array');
    display.innerHTML = ""; // Clear the display
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
        }, i * 1000, steps[i]);
    }
});
main();
