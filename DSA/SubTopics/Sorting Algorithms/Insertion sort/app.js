console.log("Insertion sort");
let sortedArrayElement = document.getElementById('sorted-array');
let sortButton = document.getElementById('sort-button');
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseFloat(element));
    inputArray = inputArray.filter(element => !isNaN(element));
    return inputArray;
}
function insertionSort(arr, steps) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        steps.push(`Iteration ${i}: Inserting ${key} into its correct position: [ ${arr.join(' , ') + " ]"}`);
    }
    steps.push("Sorted array: [ " + arr.join(' , ') + " ]");
}
function main() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    let steps = [];
    steps.push("Original array: [ " + arr.join(' , ') + " ]");
    insertionSort(arr, steps);
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
}
main();
sortButton.addEventListener('click', () => {
    let arr = getInputArray();
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    console.log(arr.join(' '));
    insertionSort(arr, steps);
    steps.push("Sorted array: " + arr.join(' '));
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
