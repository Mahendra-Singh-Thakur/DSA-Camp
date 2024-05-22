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
    "DSA": "Data Structures And Algorithms",
    "DC ": "Data Communication",
    "CN ": "Computer Networks",
    "COA": "Computer Organization And Architecture",
    "ADA": "Algorithms And Data Structures",
    "OOPM": "Object Oriented Programming",
    "DS ": "Data Structures",
    "PS": "Probability and Statistics"
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
                <title>DSACamp</title>
                <link rel="stylesheet" href="style.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap" rel="stylesheet">
            
            </head>
            
            <body>
                <div id="main1">
                    <div id="navbar">
                        <img id="logo" src="../IMAGES/Home/logo.png" alt="image">
                        <div id="camp">CAMP</div>
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
                            <ul class="list" style="width: 100%;">
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </nav>
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
            
            #logo {
                margin-left: 1%;
                margin-top: 1px;
                height: 100%;
                border-radius: 50%;
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                /* position: relative;  */
            }
            
            
            #camp {
                padding: 4px;
                position: absolute;
                top: 23px;
                /* Position the nav vertically centered */
                left: 63px;
                color: white;
                font-family: sans-serif;
                background-color: #000000;
                border-top-right-radius: 40%;
                border-bottom-right-radius: 40%;
                display: inline-block;
            
            }
            
            #navbar {
                height: 60px;
                position: relative;
                background-color: rgb(246, 251, 255);
                padding: 4px;
                border-bottom: 4px solid black;
                /* Add relative positioning to establish a containing block for the nav */
            }
            
            nav {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            
            nav ul h1 {
                text-align: center;
            }
            
            nav ul {
                list-style-type: none;
            }
            
            nav ul li {
                display: inline;
            }
            
            nav ul li a {
                border-radius: 7px;
                display: inline-block;
                margin: 0px 17px;
                padding: 10px 20px;
                text-decoration: none;
                font-size: large;
                color: #fff;
                background-color: #000000;
            }
            
            nav ul li a:hover {
                box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.4), 0 4px 10px 0 rgba(0, 0, 0, 0.6);
            
            }
            
            #main2 {
                width: 100%;
                height: 91%;
                display: flex;
                justify-content: start;
                align-items: start;
            }
            
            #headingc1 {
                position: sticky;
                top: 0px;
                z-index: 1;
                /* Added z-index */
                background: linear-gradient(45deg, #232323, #101010);
                color: #3688cf;
                /* Text color */
                padding: 10px;
                /* Adjust padding as needed */
                text-align: center;
            }
            
            #container1 {
                width: 24%;
                height: 100%;
                background: linear-gradient(45deg, #474747, #101010);
                display: flex;
                flex-direction: column;
                /* Stack elements vertically */
                overflow: auto;
                /* Enable vertical scrolling */
            }
            
            .active {
                color: gold;
                font-size: 21px;
                text-decoration: underline;
            }
            
            #container1 ul {
                padding: 0;
                /* Remove default padding */
                margin: 0;
                /* Remove default margin */
                color: rgb(255, 255, 255);
                font-size: 19px;
            }
            
            #container1 ul li {
                padding: 25px;
                display: block;
                text-align: center;
                /* Center text within li */
            }
            
            #container1 ul li a:hover {
                cursor: pointer;
                color: rgb(255, 255, 169);
                /* color: rgb(185, 185, 185); */
                font-size: 21px;
            }
            
            #container1 ul li a {
                display: block;
                padding: 5px;
                color: inherit;
                text-decoration: none;
            }
            
            #container1 ul li li a:hover {
                cursor: grab;
            }
            
            #container1 ul li li a {
                margin-left: 20%;
                text-align: start;
                font-size: 15px;
                list-style-type: disc;
            }
            
            
            #container2 {
                /* margin: 6px; */
                width: 100%;
                height: 100%;
                background-color: rgb(246, 251, 255);
                /* background: linear-gradient(45deg, #a7d6ff, #058aff); */
                display: flex;
                flex-wrap: wrap;
                justify-content: space-evenly;
                align-content: space-evenly;
                overflow: auto;
            }
            
            #container2 .list {
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            #container2 .list li {
                width: 23%;
                /* 33.33% width for each column with 20px margin */
                margin: 40px;
                /* Adjust margin as needed */
                text-align: center;
            }
            
            #container2 .list li .content:hover {
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6), 0 6px 20px 0 rgba(0, 0, 0, 0.6);
                background-color: #f0ffff;
            }
            
            #container2 .list li .content {
                border: 2px solid #000000;
                /* Example border style */
                list-style-type: none;
                border-radius: 7px;
                padding: 10px;
                /* Example padding */
            }
            
            #container2 .list li .content .thumbnail img {
                border-radius: 5px;
                max-width: 100%;
            }
            
            
            #container2 .list li .content .info {
                margin-top: 10px;
            }
            
            #container2 .list li a {
                text-decoration: none;
                color: rgb(53, 53, 255);
                font-size: 23px;
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
                /* background-color: aqua; */
                animation: box1animation 3s ease-in-out 2s forwards;
            }
            
            #box2 {
                position: fixed;
                right: 0px;
                top: 0px;
                /* background-color: bisque; */
                animation: box2animation 3s ease-in-out 2s forwards;
            }
            
            #box3 {
                position: fixed;
                left: 0px;
                bottom: 0px;
                /* background-color: blueviolet; */
                animation: box3animation 3s ease-in-out 2s forwards;
            }
            
            #box4 {
                position: fixed;
                right: 0px;
                bottom: 0px;
                /* background-color: yellow; */
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
            return `let list = document.querySelector(".list");
            let Topic = document.querySelector("#Topic");
            let subtopics = document.querySelector("#subtopics");
            let Null = "#";
            let imgscr = "../IMAGES/${topic}/logologo.jpg";
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
                    string += \`<li id="\${item}">
                    <div class="content">
                        <a class="thumbnail" href="../${topic}/SubTopics/\${t.innerText}/\${item}/index.html">
                            <img src="\${imgscr}" alt="please wait">
                        </a>
                        <div class="info">
                            <a id="\${item}" href="../${topic}/SubTopics/\${t.innerText}/\${item}/index.html">\${item}</a>
                        </div>
                    </div>
                    </li>\`;
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



