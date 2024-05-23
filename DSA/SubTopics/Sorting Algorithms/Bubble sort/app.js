console.log("Bubble sort");
let sortedArrayElement = document.getElementById('sorted-array');
let steps = [];

function bubbleSort(arr) {
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
                steps.push(`Swapping ${arr[j]} and ${arr[j + 1]} : ${arr.join(' ')}`);
            }
        }
    }
}

function main() {
    let arr = [64, 34, 25, 12, 22, 11, 90];
    steps.push("Original array: " + arr.join(' '));

    bubbleSort(arr);

    steps.push("Sorted array: " + arr.join(' '));
    console.log(steps);
}

main();

// Animate the sorting steps
let delay = 0;
for (let step of steps) {
    setTimeout((step) => {
        let div = document.createElement('div');
        div.textContent = step;
        sortedArrayElement.appendChild(div);
    }, delay, step); // Pass 'step' as an argument to setTimeout
    delay += 1000; // Adjust the speed of animation by changing the multiplier
}
