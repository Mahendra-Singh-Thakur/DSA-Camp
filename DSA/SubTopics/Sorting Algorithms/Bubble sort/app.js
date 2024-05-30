console.log("Bubble sort");
let sortedArrayElement = document.getElementById('sorted-array');
let sortButton = document.getElementById('sort-button');
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseFloat(element));
    inputArray = inputArray.filter(element => !isNaN(element));
    return inputArray;
}
function bubbleSort(arr, steps) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                steps.push(`Iteration ${i + 1}: Swapping ${arr[j]} and ${arr[j + 1]} : ${arr.join(' ')}`);
            }
        }
    }
}
function main() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    bubbleSort(arr, steps);
    steps.push("Sorted array: " + arr.join(' '));
    let delay = 0;
    for (let step of steps) {
        setTimeout((step) => {
            let div = document.createElement('div');
            div.innerHTML = step;
            let icon = document.createElement('i');
            icon.className = 'fa-solid fa-angles-down';
            sortedArrayElement.appendChild(icon);
            sortedArrayElement.appendChild(div);
        }, delay, step);
        delay += 500;
    }
    steps.push("Sorted array: " + arr.join(' '));
}
main();
sortButton.addEventListener('click', () => {
    let arr = getInputArray();
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    console.log(arr.join(' '));
    bubbleSort(arr, steps);
    let delay = 0;
    sortedArrayElement.innerHTML = "";
    for (let step of steps) {
        setTimeout((step) => {
            let div = document.createElement('div');
            div.innerHTML = step;
            let icon = document.createElement('i');
            icon.className = 'fa-solid fa-angles-down';
            sortedArrayElement.appendChild(icon);
            sortedArrayElement.appendChild(div);
        }, delay, step);
        delay += 500;
    }
});
