let COURSES = [
    COA = {
        Name: "COA",
        Topics: ["Basics of COA",
            "CPU",
            "Contol Unit Organisation",
            "Computer Arithmetic",
            "IO Organisation",
            "Memory Organisation",
            "Multiprocessors"],
        Modules: {
            "Basics of COA": ["Computer Structures", "Control Word", "Stack Organisation", "Instruction Format"],
            "CPU": ["Registers", "ALU", "Bus", "Addressing modes"],
            "Contol Unit Organisation": ["Instructions", "Fetch and Execution Cycle", "Hardwired Unit", "Micro Progams and units"],
            "Computer Arithmetic": ["Addition and Substraction", "Multiplication and Division", "Booth's Algorithm", "Floating Point Operations", "1's and 2's compliments"],
            "IO Organisation": ["IO Interfaces PCI bus", "SCSI Bus", "USB", "Data Tranfer", "DMA", "IO Processors"],
            "Memory Organisation": ["Memory Hiearchy", "RAM and ROM", "Secondary Memory", "Cache Memory", "Virtual Memory"],
            "Multiprocessors": ["Introduction", "Inter Processor Communications", "Memory in Muliprocessors", "Pipeline", "RIS and CISC", "Multicore Processors"],
        }
    },
];
// for (let COURSE of COURSES) {
//     console.log(COURSE.Name);
//     for (let topic of COURSE.Topics) {
//         console.log("topic => ", topic);
//         for (let topi of COURSE.Modules[topic]) {
//             console.log("\t\tModules => ", topi);
//         }
//     }
// }
// const fs = require('fs');
// const path = require('path');
// const rootDirectoryPath = '/Git hub/NEW/';
// const dsaCourse = COURSES.find(course => course.Name === "COA");
// if (dsaCourse) {
//     const dsaTopics = dsaCourse.Topics;
//     const dsaModules = dsaCourse.Modules;
//     const dsaRootDirectory = path.join(rootDirectoryPath, 'COA');
//     fs.mkdir(dsaRootDirectory, { recursive: true }, (err) => {
//         if (err) {
//             console.error('Error creating COA root folder:', err);
//         } else {
//             console.log(`Root folder 'COA' created successfully`);
//             dsaTopics.forEach((topic) => {
//                 const topicDirectory = path.join(dsaRootDirectory, topic);
//                 fs.mkdir(topicDirectory, { recursive: true }, (err) => {
//                     if (err) {
//                         console.error(`Error creating folder for topic '${topic}':`, err);
//                     } else {
//                         console.log(`Folder '${topic}' created successfully`);
//                         if (dsaModules.hasOwnProperty(topic)) {
//                             const topicModules = dsaModules[topic];
//                             topicModules.forEach((module) => {
//                                 const moduleDirectory = path.join(topicDirectory, module);
//                                 fs.mkdir(moduleDirectory, { recursive: true }, (err) => {
//                                     if (err) {
//                                         console.error(`Error creating folder for module '${module}' in topic '${topic}':`, err);
//                                     } else {
//                                         console.log(`Folder '${module}' created successfully in topic '${topic}'`);
//                                         const fileNames = ['index.html', 'style.css', 'app.js'];
//                                         fileNames.forEach((fileName) => {
//                                             fs.writeFile(path.join(moduleDirectory, fileName), `Content of ${fileName}`, (err) => {
//                                                 if (err) {
//                                                     console.error(`Error creating file '${fileName}' in module '${module}' in topic '${topic}':`, err);
//                                                 } else {
//                                                     console.log(`File '${fileName}' created successfully in module '${module}' in topic '${topic}'`);
//                                                 }
//                                             });
//                                         });
//                                     }
//                                 });
//                             });
//                         }
//                     }
//                 });
//             });
//         }
//     });
// } else {
//     console.error('COA course not found.');
// }
const fs = require('fs');
const path = require('path');
const rootDirectoryPath = '/Git hub/NEW/';
const dsaCourse = COURSES.find(course => course.Name === "COA");
if (dsaCourse) {
    const dsaTopics = dsaCourse.Topics;
    const dsaModules = dsaCourse.Modules;
    dsaTopics.forEach((topic) => {
        if (dsaModules.hasOwnProperty(topic)) {
            const topicModules = dsaModules[topic];
            topicModules.forEach((module) => {
                const moduleDirectory = path.join(rootDirectoryPath, 'COA', topic, module);
                const indexHtmlContent = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DSACamp - ${module}</title>
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
                    <li><a href="/DSA-Camp/COA/index.html">Computer Organization &amp; Architecture</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a href="/DSA-Camp/COA/index.html">${topic}</a></li>
                    <li><i class="fa-solid fa-arrow-right"></i></li>
                    <li><a>${module}</a></li>
                </ul>
            </nav>
        </div>
    </section>
    <div id="main1">
        <div class="inmain11">
            <div id="explanation">
                <h2>${topic}</h2>
            </div>
            <div id="algorithm">
                <h2>${module}</h2>
            </div>
        </div>
        <div id="lastdiv">
            <div>
                <h3>Mahendra Singh Thakur , Priyanshu Thakur</h3>
                <h2>Computer Organization &amp; Architecture</h2>
            </div>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>`;
                const styleCssContent = `* {
    padding: 0;
    margin: 0;
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

#explanation {
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

#algorithm {
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

#lastdiv {
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

#lastdiv div {
    width: 60%;
    margin: 0.5%;
    padding: 1%;
    border-radius: 5px;
    height: 100%;
    text-align: center;
    font-size: 1.2rem;
    background-color: #5dc6b1;
}`;
                fs.writeFile(path.join(moduleDirectory, 'index.html'), indexHtmlContent, (err) => {
                    if (err) {
                        console.error(`Error writing to index.html file for module '${module}' in topic '${topic}':`, err);
                    } else {
                        console.log(`Content written to index.html file for module '${module}' in topic '${topic}'`);
                    }
                });
                fs.writeFile(path.join(moduleDirectory, 'style.css'), styleCssContent, (err) => {
                    if (err) {
                        console.error(`Error writing to style.css file for module '${module}' in topic '${topic}':`, err);
                    } else {
                        console.log(`Content written to style.css file for module '${module}' in topic '${topic}'`);
                    }
                });
            });
        }
    });
} else {
    console.error('COA course not found.');
}
