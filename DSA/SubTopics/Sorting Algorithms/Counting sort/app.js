console.log("Counting sort");

// Function to retrieve input array
function getInputArray() {
    let inputString = document.getElementById('input-array').value.trim();
    let inputArray = inputString.split(/\s+/);
    inputArray = inputArray.map(element => parseInt(element)); // Parsing to integers
    return inputArray;
}

// Counting Sort function
function countingSort(arr, steps) {
    const n = arr.length;

    // Find the maximum element in the array
    const maxElement = Math.max(...arr);

    // Create a count array to store the count of each element
    const count = new Array(maxElement + 1).fill(0);

    // Count the occurrences of each element in the input array
    arr.forEach(num => {
        count[num]++;
    });
    // Print the count of each element
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

    // Calculate the cumulative count
    let string = "Original Array : ";
    for (let i = 0; i < n; i++) {
        string += `${arr[i]} `;
    }
    steps.push(string);
    string = `Count Array : `;
    for (let i = 0; i <= maxElement; ++i) {
        string += `${count[i]} `;
    }
    indstr = "";
    for (let i = 0; i <= maxElement; ++i) {
        indstr += `${i} `;
    }
    string += `<p>Count Index : ${indstr}</p>`;
    steps.push(string);
    // steps.push(string);
    for (let i = 1; i <= maxElement; ++i) {
        string += `${count[i]} `;
        count[i] += count[i - 1];
    }
    string = "Modify Array : ";
    for (let i = 0; i <= maxElement; ++i) {
        string += `${count[i]} `;
    }
    string += `<p>Modify Index : ${indstr}</p>`;
    steps.push(string);
    // Create a temporary array to store the sorted output
    const output = new Array(n);

    // Place the elements in the sorted order
    for (let i = n - 1; i >= 0; --i) {
        output[count[arr[i]] - 1] = arr[i];
        --count[arr[i]];
    }
    // Copy the sorted elements back to the original array
    for (let i = 0; i < n; ++i) {
        arr[i] = output[i];
    }
}

// Main function
function main() {
    let sortedArrayElement = document.getElementById('sorted-array');
    let sortButton = document.getElementById('sort-button');
    // let arr = [64, 34, 25, 12, 22, 11, 90];
    let arr = [1,7,9, 3, 2,6,5, 3, 4, 1, 6, 4, 3];
    let steps = [];
    steps.push("Original array: " + arr.join(' '));
    countingSort(arr, steps);
    indstr = "";
    for (let i = 0; i < arr.length; ++i) {
        indstr += `${i} `;
    }

    steps.push('Sorted Array : ' + arr.join(' ') + `<p>Sorted Index : ${indstr}</p>`);
    let delay = 0;
    for (let step of steps) {
        // setTimeout((step) => {
        let div = document.createElement('div');
        div.innerHTML = step;
        let icon = document.createElement('i');
        icon.className = 'fa-solid fa-angles-down'; // Corrected class name
        sortedArrayElement.appendChild(icon); // Append the icon
        sortedArrayElement.appendChild(div);
        // }, delay, step); // Pass 'step' as an argument to setTimeout
        delay += 500; // Adjust the speed of animation by changing the multiplier
    }
}
// Event listener for sort button
document.getElementById('sort-button').addEventListener('click', () => {
    let arr = getInputArray();
    const maxElement = Math.max(...arr);
    console.log("maxElement = Math.max(...arr) : ", maxElement);
    if (10 <= maxElement) {
        alert("Input array should be less than 10");
        return;
    }
    else {
        let sortedArrayElement = document.getElementById('sorted-array');
        let steps = [];
        steps.push("Original array: " + arr.join(' '));
        countingSort(arr, steps);
        indstr = "";
        for (let i = 0; i < arr.length; ++i) {
            indstr += `${i} `;
        }
        steps.push('Sorted Array : ' + arr.join(' ') + `<p>Sorted Index : ${indstr}</p>`);
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
    }
});

// Call main function
main();
