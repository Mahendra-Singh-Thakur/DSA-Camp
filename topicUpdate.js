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

// Define the root directory path where you want to create the folders
const rootDirectoryPath = '/Git hub/DSA-Camp/';

// Define the Topics array
// const topics = ["DC", "CN", "COA", "ADA", "OOPM", "DS", "PS"];
const topics = {
    "DSA": "Data Structures &amp; Algorithms",
    "DC": "Data Communication",
    "CN": "Computer Networks",
    "COA": "Computer Organization &amp; Architecture",
    "ADA": "Algorithms &amp; Data Structures",
    "OOPM": "Object Oriented Programming",
    "DS": "Data Structures",
    "PS": "Probability &amp; Statistics"
};
// for (let topic in topics) {
//     console.log(topic);
// };
// for (let topic in topics) {
//     if (topics.hasOwnProperty(topic)) {
//         console.log(`${topic}: ${topics[topic]}`);
//     }
// }
// Define the file names to be created in each topic folder
const fileNames = ['index.html', 'style.css', 'app.js'];

// Function to generate content for each file based on topic and file name
const generateContent = (topic, fileName) => {
    switch (fileName) {
        case 'index.html':
            return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topics[topic]}</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet">

</head>
<body>
    <div id="main1">
        <section>
            <div id="navbar">
                <div id="camp">DSACamp</div>
                <nav>
                    <ul>
                        <li><a href="../index.html">Home </a></li>
                        <li> <i class="fa-solid fa-arrow-right"></i></li>
                        <li><a>${topics[topic]}</a></li>
                        <li> <i class="fa-solid fa-arrow-right"></i></li>
                        <li><a id="Topic">Choose Topic</a></li>
                    </ul>
                </nav>
            </div>
        </section>
        <div id="main2">
            <div id="container1">
                <h1 id="headingc1">${topics[topic]}:</h1>
                <div id="subtopics">
                    <!-- <ul> -->
                    <!-- <li class="topics"><a href="#">Array</a></li>-->
                    <!-- </ul> -->
                </div>
            </div>
            <div id="container2">
                <div id="heading">TOPICS :</div>
                <ul class="list flex-container">
                </ul>
            </div>
        </div>
    </div>
    <!-- <img class="boxes" id="box1" src="../IMAGES/New folder/image1.png" alt="image">
    <img class="boxes" id="box2" src="../IMAGES/New folder/image2.png" alt="image">
    <img class="boxes" id="box3" src="../IMAGES/New folder/image3.png" alt="image">
    <img class="boxes" id="box4" src="../IMAGES/New folder/image4.png" alt="image"> -->
    </div>
    <script src="../topicList.js"></script>
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
    height: 100vh;
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
    background-color: #31363F;
    padding: 4px;
    border-bottom: 2px solid #181c22;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#camp {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
    color: rgb(0, 0, 0);
    font-family: "Playfair Display", serif;
    background-color: #16a085;
    padding: 4px 8px;
    margin: 0px 13px;

    font-size: 1.5rem;
    transition: transform 0.3s, color 0.3s;
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
    padding: 4px 8px;
    text-decoration: none;
    font-size: 1.05rem;
    color: #fff;
    background-color: #263647;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 1px rgb(196, 196, 196);
}

nav ul li a:hover {
    background-color: #22ffd3;
    transition: background-color 0.3s ease-in;
    color: black;
    cursor: pointer;
}

nav ul li i {
    color: white;
}

nav ul li a:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
}

#main2 {
    width: 100vw;
    height: 100vh;
    background-color: #263647;
    padding-top: 60px;
    display: flex;
    justify-content: start;
    align-items: start;
}

#headingc1 {
    position: sticky;
    top: 0px;
    z-index: 1;
    font-weight: 400;
    font-family: "Playfair Display", serif;

    background-color: #181c22;
    box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.6), 0 6px 10px 0 rgba(0, 0, 0, 0.6);
    color: #48CAE4;
    padding: 10px;
    text-align: center;
}

#container1 {
    width: 24%;
    height: 100%;
    border-right: solid 2px black;

    background-color: #181c22;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

#container1 ul {
    padding: 0;
    margin: 0;
}

#container1 ul li {
    padding: 15px 22px;
    display: block;
    color: #e5f2ff;
    font-size: 20px;
    text-align: center;
}

#container1 ul li:hover {
    color: #48CAE4;
    font-size: 21px;
    cursor: pointer;
}

#container1 ul li a {
    display: block;
    padding: 4px;
    color: inherit;
    background-color: #31363F;
    box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.6), 0 6px 10px 0 rgba(0, 0, 0, 0.6);
    text-decoration: none;
    transition: font-size 0.3s, box-shadow 0.3s;
}

#container1 ul li li {
    padding: 0px;
}

#container1 ul li i {
    color: #48CAE4;
}

#container1 ul li li:hover {
    color: white;
    cursor: default;
}

#container1 ul li li a:hover {
    color: #48CAE4;
    font-size: 19px;
    box-shadow: 4px 8px 10px 0 rgba(0, 0, 0, 0.6), 0 6px 10px 0 rgba(0, 0, 0, 0.6);
    cursor: pointer;
}

#container1 ul li li a {
    margin-top: 4PX;
    margin-left: 15%;
    text-align: start;
    font-size: 18px;
}

#container2 {
    width: 100%;
    height: 100%;
    background-color: #F7F7F7;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
}
#heading {
    font-size: 40px;
    background-color: inherit;
    text-decoration: none;
    display: block;
    font-family: "Playfair Display", serif;
    color: #43a7ff;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.3);
    padding: 0px 10px;
    /* border: solid 1px #808080; */
    border-radius: 8px;
    margin: 1% 0%;
}

.image {
    width: 100%;
    border-radius: 4px;
}

.image:hover {
    opacity: 0.9;
    transition: 0.3s;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
}

.list-container {
    width: 23%;
    margin: 4.2%;
    padding: 0.5%;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.2);
}

.list-container li {
    padding: 10px;
}

.list-container li a {
    color: #000000;
    text-decoration: none;
    font-size: 19px;
}
.list-container:hover {
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.3);
    transform: scale(1.02);
}

.boxes {
    width: 50%;
    height: 50%;
    z-index: 2;
}

#box1 {
    position: fixed;
    left: 0px;
    top: 0px;
    animation: box1animation 3s ease-in-out 2s forwards;
}

#box2 {
    position: fixed;
    right: 0px;
    top: 0px;
    animation: box2animation 3s ease-in-out 2s forwards;
}

#box3 {
    position: fixed;
    left: 0px;
    bottom: 0px;
    animation: box3animation 3s ease-in-out 2s forwards;
}

#box4 {
    position: fixed;
    right: 0px;
    bottom: 0px;
    animation: box4animation 3s ease-in-out 2s forwards;
}

@keyframes box1animation {
    0% {
        width: 50%;
        height: 50%;
    }

    100% {
        width: 0%;
        height: 0%;
        border-bottom-right-radius: 30%;
    }
}

@keyframes box2animation {
    0% {
        width: 50%;
        height: 50%;
    }

    100% {
        width: 0%;
        height: 0%;
        border-bottom-left-radius: 30%;
    }
}

@keyframes box3animation {
    0% {
        width: 50%;
        height: 50%;
    }

    100% {
        width: 0%;
        height: 0%;
        border-top-right-radius: 30%;
    }
}

@keyframes box4animation {
    0% {
        width: 50%;
        height: 50%;
    }

    100% {
        width: 0%;
        height: 0%;
        border-top-left-radius: 30%;
    }
}

::-webkit-scrollbar {
    width: 5px;
    background-color: black;
}

::-webkit-scrollbar-thumb {
    background-color: #fafafa;
    border: solid 1px black;
    border-radius: 10px;
}`;
        case 'app.js':
            return `console.log("");
let list = document.querySelector(".list");
let Topic = document.querySelector("#Topic");
let subtopics = document.querySelector("#subtopics");
let ul = document.createElement("ul");
for (let topic of ${topic}.Topics) {
    let li = document.createElement("li");
    li.setAttribute("class", "topics");
    li.setAttribute("id", topic);
    li.innerHTML = \`<a>\${topic}</a>\`;
    ul.appendChild(li);
}
subtopics.appendChild(ul);
let topics = document.querySelectorAll(".topics");
topics.forEach((t) => {
    let string = "";
    for (let item of ${topic}.Modules[t.innerText]) {
        string += \`<a href="../${topic}/SubTopics/\${t.innerText}/\${item}/index.html">
                        <div class="list-container">
                            <img class="image" src="../IMAGES/${topic}/logologo.jpg">
                            <li>
                                <a href="../${topic}/SubTopics/\${t.innerText}/\${item}/index.html">\${item}</a>
                            </li>
                        </div>
                    </a>\`;
    }
    t.addEventListener("click", () => {
        // console.log(t.innerText);
        Topic.innerHTML = t.innerText;
        if (t.classList.contains("active")) {
            t.classList.remove("active");
            list.innerHTML = "";
        } else {
            topics.forEach(topic => {
                topic.classList.remove("active");
            });
            t.classList.add("active");
            list.innerHTML = string;
            const lastclick = t.textContent;
            sessionStorage.setItem('lastClicked', lastclick);
        }
    });
});
console.log(sessionStorage.getItem('lastClicked'));
if (sessionStorage.getItem('lastClicked') !== null) {
    document.addEventListener("DOMContentLoaded", function () {
        let element = document.getElementById(sessionStorage.getItem('lastClicked'));
        let event = new Event("click");
        element.dispatchEvent(event);
    });
}
if (sessionStorage.getItem('lastClicked') === null) {
    console.log("default");
    document.addEventListener("DOMContentLoaded", function () {
        let element = document.getElementById('Basics of DSA');
        let event = new Event("click");
        element.dispatchEvent(event);
    });
}`;
        default:
            return '';
    }
};
// Iterate over each topic in the Topics array
for (let topic in topics) {
    // Create the directory path for the current topic
    const topicDirectory = path.join(rootDirectoryPath, topic);

    // Create a new folder for the topic
    fs.mkdir(topicDirectory, { recursive: true }, (err) => {
        if (err) {
            console.error(`Error creating folder for topic '${topic}':`, err);
        } else {
            console.log(`Folder '${topic}' created successfully`);

            // Iterate over each file name to create the file in the topic folder
            fileNames.forEach((fileName) => {
                const filePath = path.join(topicDirectory, fileName);
                const content = generateContent(topic, fileName);

                fs.writeFile(filePath, content, (err) => {
                    if (err) {
                        console.error(`Error creating file '${fileName}' in topic '${topic}':`, err);
                    } else {
                        console.log(`File '${fileName}' created successfully in topic '${topic}'`);
                    }
                });
            });
        }
    });
};
