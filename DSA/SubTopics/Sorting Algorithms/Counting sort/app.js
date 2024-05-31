console.log("Counting sort");
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseInt(element));
    return inputArray;
}
function countingSort(arr, steps) {
    const n = arr.length;
    const maxElement = Math.max(...arr);
    const count = new Array(maxElement + 1).fill(0);
    arr.forEach(num => {
        count[num]++;
    });
    steps.push("Count of each element:");
    if (count.length <= 20) {
        for (let i = 0; i <= maxElement; ++i) {
            steps.push(`Element(${i}) => Count(${count[i]})`);
        }
    }
    else {
        for (let i = 0; i <= maxElement; ++i) {
            if (count[i] !== 0) {
                steps.push(`Element(${i}) => Count(${count[i]})`);
            }
        }
    }
    steps.push("Original Array : [ " + arr.join(' , ') + " ]");
    let string = "";
    string += `<p>Count Array : [ ${count.join(' , ')} ]</p>`;
    let indstr = "";
    for (let i = 0; i <= maxElement; ++i) {
        indstr += `${i} `;
    }
    string += `<p>Count Index : [ ${indstr.trim().split(' ').join(' , ')} ]</p>`;

    steps.push(string);
    steps.push(`Do Cumulative Sum of Count array = Modify Array`);
    for (let i = 1; i <= maxElement; ++i) {
        string += `${count[i]} `;
        count[i] += count[i - 1];
    }
    string = ``;
    string += `<p>Modify Array : [ ${count.join(' , ')} ]</p>`;
    string += `<p>Modify Index : [ ${indstr.trim().split(' ').join(' , ')} ]</p>`;
    steps.push(string);

    const output = new Array(n);
    for (let i = n - 1; i >= 0; --i) {
        output[count[arr[i]] - 1] = arr[i];
        --count[arr[i]];
    }
    for (let i = 0; i < n; ++i) {
        arr[i] = output[i];
    }
}
function main() {
    let sortedArrayElement = document.getElementById('sorted-array');
    let sortButton = document.getElementById('sort-button');
    let arr = [1, 7, 9, 3, 2, 6, 5, 3, 4, 1, 6, 4, 3];
    let steps = [];
    steps.push("Original array: [ " + arr.join(' , ') + " ]");
    countingSort(arr, steps);
    string = ``;
    string += `<p>Sorted Array : [ ${arr.join(' , ')} ]</p>`;
    let indstr = "";
    for (let i = 0; i < arr.length; ++i) {
        indstr += `${i} `;
    }
    string += `<p>Sorted Array : [ ${indstr.trim().split(' ').join(' , ')} ]</p>`;
    steps.push(string);
    for (let step of steps) {
        let div = document.createElement('div');
        div.innerHTML = step;
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-angles-down';
        sortedArrayElement.appendChild(icon);
        sortedArrayElement.appendChild(div);
    }
}
document.getElementById('sort-button').addEventListener('click', () => {
    let arr = getInputArray();
    const maxElement = Math.max(...arr);
    console.log("maxElement = Math.max(...arr) : ", maxElement);
    if (10 <= maxElement) {
        alert("Input array Elements should be less than 10");
        return;
    }
    else {
        let sortedArrayElement = document.getElementById('sorted-array');
        let steps = [];
        steps.push("Original array: " + arr.join(' '));
        countingSort(arr, steps);
        string = ``;
        string += `<p>Sorted Array : [ ${arr.join(' , ')} ]</p>`;
        let indstr = "";
        for (let i = 0; i < arr.length; ++i) {
            indstr += `${i} `;
        }
        string += `<p>Sorted Array : [ ${indstr.trim().split(' ').join(' , ')} ]</p>`;
        steps.push(string);
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
    }
});
main();
