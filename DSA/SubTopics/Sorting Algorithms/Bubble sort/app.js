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
    // Traverse through all elements in the array
    for (let i = 0; i < arr.length - 1; i++) {
        // Last i elements are already sorted, so we don't need to check them
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Traverse the array from 0 to n-i-1
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // Print the current state of the array after each swap
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
        icon.className = 'fa-solid fa-angles-down'; // Corrected class name
        sortedArrayElement.appendChild(icon); // Append the icon
        sortedArrayElement.appendChild(div);
        }, delay, step); // Pass 'step' as an argument to setTimeout
        delay += 500; // Adjust the speed of animation by changing the multiplier
    }

    // console.log(steps);
}

main();

sortButton.addEventListener('click', () => {
    let arr = getInputArray();
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    console.log(arr.join(' '));
    bubbleSort(arr, steps);
    steps.push("Sorted array: " + arr.join(' '));
    let delay = 0;
    sortedArrayElement.innerHTML = "";
    for (let step of steps) {
        setTimeout((step) => {
        let div = document.createElement('div');
        div.innerHTML = step;
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-angles-down'; // Corrected class name
        sortedArrayElement.appendChild(icon); // Append the icon
        sortedArrayElement.appendChild(div);
        }, delay, step); // Pass 'step' as an argument to setTimeout
        delay += 500; // Adjust the speed of animation by changing the multiplier
    }
});

// Animate the sorting steps
