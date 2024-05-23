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
            return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DSACamp</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet">
</head>

<body>
    <section>
        <div id="navbar">
            <div id="camp">DSACamp</div>
            <nav>
                <ul>
                    <li><a href="/DSA-Camp/index.html">Home</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a href="/DSA-Camp/DSA/index.html">Data Structures &amp; Algorithms</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a href="/DSA-Camp/DSA/index.html">Stack</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a>${topic}</a></li>
                </ul>
            </nav>
        </div>
    </section>
    <div id="main1">

    </div>
    <script src="app.js"></script>

</body>

</html>`;
        case 'style.css':
            return `* {
    padding: 0;
    margin: 0;
    font-family: 'Bubblegum Sans', sans-serif;
    box-sizing: border-box;
    /* background-color: black;
    color: white; */
}

h1 {
    color: rgb(96, 236, 255);
}

img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

#navbar {
    width: 100vw;
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #45525e;
    padding: 4px;
    border-bottom: 3px solid #2b3d4f;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#camp {
    padding: 4px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
    color: rgb(0, 0, 0);
    font-family: 'Bubblegum Sans', cursive;
    background-color: #16a085;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 10px;
    font-size: 1.5rem;
}
#camp:hover {
    animation: campanim 0.5s linear forwards;
}

@keyframes campanim {
    0% {
        transform: rotate(0deg); /* Start with no rotation */
    }
    100% {
        transform: rotate(45deg); /* Rotate 45 degrees */
        color: white;
    }
}
nav {
    margin-left: auto;
    margin-right: 2%;
}

nav ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul li {
    margin: 0 10px;
}

nav ul li a {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
    background-color: #34495e;
    border-radius: 20px;
    transition: background-color 0.2s ease;
}

nav ul li a:hover {
    background-color: #16a085;
    color: black;
}

nav ul li i {
    color: #fff;
}

nav ul li a:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
}

#main1 {
    width: 100vw;
    background: linear-gradient(45deg, #a7d6ff, #058aff);
    padding-top: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* #main2 {
    width: 100%;
    height: calc(100% - 60px); 
    background: linear-gradient(45deg, #a7d6ff, #058aff);
    margin-top: 74px; 
} */`;
        case 'app.js':
            return `console.log${topic}`;
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
