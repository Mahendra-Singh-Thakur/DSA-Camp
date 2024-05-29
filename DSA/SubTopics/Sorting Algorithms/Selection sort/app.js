console.log("Selection sort");
let sortedArrayElement = document.getElementById('sorted-array');
let sortButton = document.getElementById('sort-button');
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseFloat(element));
    inputArray = inputArray.filter(element => !isNaN(element));
    return inputArray;
}
function selectionSort(arr, steps) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        steps.push(`Iteration ${i + 1}: Select: (${arr[i]}) and Swapping With ((${arr[minIndex]}) Index: (${i})) : ${arr.join(' ')}`);
    }
}
function main() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    selectionSort(arr, steps);
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
}
main();
sortButton.addEventListener('click', () => {
    let arr = getInputArray();
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    console.log(arr.join(' '));
    selectionSort(arr, steps);
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
