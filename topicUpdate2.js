// const fs = require('fs');
// const path = require('path');

// // Define the root directory path where you want to create the folders
// const rootDirectoryPath = '/Git hub/NEW/';

// // Define the Topics array
// const topics = ["DC", "CN", "COA", "ADA", "OOPM", "DS", "PS"];

// // Define the file names to be created in each topic folder
// const fileNames = ['index.html', 'style.css', 'app.js'];

// // Iterate over each topic in the Topics array
// topics.forEach((topic) => {
//     // Create the directory path for the current topic
//     const topicDirectory = path.join(rootDirectoryPath, topic);

//     // Create a new folder for the topic
//     fs.mkdir(topicDirectory, { recursive: true }, (err) => {
//         if (err) {
//             console.error(`Error creating folder for topic '${topic}':`, err);
//         } else {
//             console.log(`Folder '${topic}' created successfully`);

//             // Iterate over each file name to create the file in the topic folder
//             fileNames.forEach((fileName) => {
//                 const filePath = path.join(topicDirectory, fileName);
//                 fs.writeFile(filePath, `Content of ${fileName}`, (err) => {
//                     if (err) {
//                         console.error(`Error creating file '${fileName}' in topic '${topic}':`, err);
//                     } else {
//                         console.log(`File '${fileName}' created successfully in topic '${topic}'`);
//                     }
//                 });
//             });
//         }
//     });
// });

const fs = require('fs');
const path = require('path');

// Define the root directory path where you want to update the folders
const rootDirectoryPath = '/Git hub/DSA-Camp/DSA/SubTopics/Sorting Algorithms/';
// DSA-Camp\DSA\SubTopics\Sorting Algorithms\Bubble sort
// Define the Topics array
const topics = ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort", "Quick sort", "Heap sort", "Counting sort", "Bucket sort", "Shell sort"];

// Define the file names to be updated in each topic folder
const fileNames = ['index.html', 'style.css', 'app.js'];

// Function to update content for each file based on topic and file name
const updateContent = (topic, fileName) => {
    switch (fileName) {
        case 'index.html':
            return `Updated HTML content for ${topic}`;
        case 'style.css':
            return `Updated CSS content for ${topic}`;
        case 'app.js':
            return `Updated JavaScript content for ${topic}`;
        default:
            return '';
    }
};

// Iterate over each topic in the Topics array
for (let topic of topics) {
    // Create the directory path for the current topic
    const topicDirectory = path.join(rootDirectoryPath, topic);

    // Iterate over each file name to update the content of existing files in the topic folder
    fileNames.forEach((fileName) => {
        const filePath = path.join(topicDirectory, fileName);
        const content = updateContent(topic, fileName);

        // Check if the file exists before updating
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                console.error(`File '${fileName}' in topic '${topic}' does not exist.`);
            } else {
                // Update the content of the existing file
                fs.writeFile(filePath, content, (err) => {
                    if (err) {
                        console.error(`Error updating file '${fileName}' in topic '${topic}':`, err);
                    } else {
                        console.log(`File '${fileName}' updated successfully in topic '${topic}'`);
                    }
                });
            }
        });
    });
}
