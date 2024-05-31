console.log("Bucket sort");
let sortedArrayElement = document.getElementById('sorted-array');
let sortButton = document.getElementById('sort-button');
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseInt(element));
    return inputArray;
}
function deepCopy(arr) {
    return arr.map(el => Array.isArray(el) ? deepCopy(el) : el);
}
function bucketSort(arr, steps) {
    const n = arr.length;
    let string = "";
    const numBuckets = 5;
    let buckets = new Array(numBuckets);
    for (let i = 0; i < numBuckets; i++) {
        buckets[i] = [];
    }
    steps.push("Created Buckets: " + JSON.stringify(buckets));
    for (let i = 0; i < n; i++) {
        let bucketIndex = Math.floor(arr[i] * numBuckets / (Math.max(...arr) + 1));
        buckets[bucketIndex].push(arr[i]);
        string += (`<p>Placed ${arr[i]} into Bucket ${bucketIndex}</p>`);
    }
    steps.push(string);
    string = "";
    for (let i = 0; i < numBuckets; i++) {
        string += (`<p>Bucket ${i}  =  [${buckets[i].join(' , ')+" ]"}</p>`);
    }
    steps.push(string);
    string = "";
    for (let i = 0; i < numBuckets; i++) {
        buckets[i].sort((a, b) => a - b);
        string += (`<p>Sorted Bucket ${i}  =  [${buckets[i].join(' , ')+" ]"}</p>`);
    }
    steps.push(string);
    steps.push("Sorted Buckets: " + JSON.stringify(buckets, "\t\n"));
    let sortedArray = [];
    for (let i = 0; i < numBuckets; i++) {
        sortedArray = sortedArray.concat(buckets[i]);
    }
    for (let i = 0; i < n; i++) {
        arr[i] = sortedArray[i];
    }
    steps.push("Sorted array: [ " + arr.join(' , ')+" ]");
}
function main() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    let steps = [];
    steps.push("Original array: [ " + arr.join(' , ')+" ]");
    bucketSort(arr, steps);
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
    bucketSort(arr, steps);
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
