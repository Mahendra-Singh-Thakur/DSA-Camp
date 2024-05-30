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
const rootDirectoryPath = '/Git hub/DSA-Camp/DSA/SubTopics/Array/';
// DSA-Camp\DSA\SubTopics\Sorting Algorithms\Bubble sort
// Define the Topics array
const topics = ["Insertion", "Deletion", "Updating", "Splitting", "Concatenation", "Filtering"];

// Define the file names to be updated in each topic folder
const fileNames = ['index.html', 'style.css', 'app.js'];
// const fileNames = ['style.css'];

// Function to update content for each file based on topic and file name
const updateContent = (topic, fileName) => {
    switch (fileName) {
        case 'index.html':
            return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DSACamp - ${topic}</title>
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
                    <li><a href="/DSA-Camp/DSA/index.html">Array</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a>${topic}</a></li>
                </ul>
            </nav>
        </div>
    </section>
    <div id="main1">
        <div class="inmain11">
            <div id="sort-explanation">
                <div id="input">
                    <input type="text" id="idinput1" placeholder="Enter">
                    <button id="sort-button">input</button>
                </div>
            </div>
            <div id="sort-algorithm">
                <h2>hello</h2>
            </div>
        </div>
        <div id="sorted-array"></div>
    </div>
    <script src="app.js"></script>
</body>

</html>`;
        case 'style.css':
            return `* {
    padding: 0;
    margin: 0;
    font-family: Bubblegum Sans;
    box-sizing: border-box;
}

h1 {
    color: rgb(96, 236, 255);
}

#main1 {
    width: 100vw;
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
    background-color: #101010;
    padding: 4px;
    border-bottom: 2px solid #a8a8a8;
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
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(45deg);
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
    background-color: #263647;
    border-radius: 20px;
    box-shadow: 0px 0px 1px 1px rgb(196, 196, 196);
    transition: background-color 0.2s ease;
}

nav ul li a:hover {
    background-color: #22ffd3;
    color: black;
    cursor: pointer;
}

nav ul li i {
    color: white;
}

nav ul li a:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
}

#main1 {
    width: 100vw;
    background: linear-gradient(to bottom, #4b79a1, #283e51);
    padding-top: 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.inmain11 {
    padding: 0% 2% 2% 1%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#sort-explanation {
    font-size: 1.2rem;
    max-width: 55%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: justify;
    margin: 10px;
}

#input {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

#input input {
    font-size: 1.5rem;
    color: black;
    border: none;
    border-bottom: 2px solid #16a085;
    padding: 5px;
    margin: 5% 0%;
    width: 50%;
}

#input input:focus {
    outline: none;
}

#input button:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: #158e78;
    cursor: pointer;
}

#input button {
    font-size: 1.5rem;
    color: #16a085;
    border: none;
    border: 2px solid #16a085;
    padding: 5px;
    width: 20%;
}

#sort-algorithm {
    width: 70%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    font-size: 1.1rem;
}

#sorted-array {
    width: 80%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#sorted-array div {
    width: 60%;
    margin: 0.5%;
    padding: 1%;
    border-radius: 5px;
    height: 100%;
    text-align: center;
    font-size: 1.2rem;
    background-color: #5dc6b1;
}`;
        case 'app.js':
            return `console.log("${topic}");`;
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
