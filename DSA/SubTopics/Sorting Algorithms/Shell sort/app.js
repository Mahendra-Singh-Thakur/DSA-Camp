console.log("Shell sort");
let sortedArrayElement = document.getElementById('sorted-array');
let sortButton = document.getElementById('sort-button');
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseInt(element));
    return inputArray;
}
function shellSort(arr, steps) {
    let n = arr.length;
    let gap = Math.floor(n / 2);
    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        steps.push(`Gap ${gap}: ${arr.join(' ')}`);
        gap = Math.floor(gap / 2);
    }
}
function main() {
    let arr = [9, 6, 35, 14, 13, 42, 11, 10, 5, 21, 4, 3, 22, 8, 7, 11, 1];
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    shellSort(arr, steps);
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
sortButton.addEventListener('click', () => {
    let arr = getInputArray();
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    shellSort(arr, steps);
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
main();
