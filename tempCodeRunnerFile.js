let COURSES = [
    DSA = {
        Name: "DSA",
        Topics: ["Basics of DSA",
            "Array",
            "String",
            "Linked List",
            "Stack",
            "Queue",
            "Hash Tables",
            "Trees",
            "Tree Traversal",
            "Min Spanning Tree",
            "Recursive Tree",
            "Heaps",
            "Graphs",
            "Graph Traversal",
            "Shortest Path Algorithms",
            "Bit Manipulation",
            "Sorting Algorithms",
            "Searching Alogrithms",
            "Divide and Conquer Algorithms",
            "Greedy Algorithms",
            "Dynamic Programming",
            "Backtracking"
            ,],
        Modules: {
            "Basics of DSA": ["Introduction", "Classification of Data Structures ", "Time Complexity", "Asymtotic Notations", "Space Complexity"],
            "Array": ["Insertion", "Deletion", "Updating", "Splitting", "Concatenation", "Filtering"],
            "String": ["Substring", "Length", "Searching", "Concatenation"],
            "Linked List": ["linked List basic things", "Singly Linked List", "Doubly Linked List", "Circular Linked List", "Applications"],
            "Stack": ["Defination", "Basis Operations", "Infix,Prefix,and Postfix Notations", "Implementation", "Applications",],
            "Queue": ["Defination", "Basic Operations", "Dequeue", "Circular Queue", "Implementation", "Priority Queue", "Applications",],
            "Hash Tables": ["Introduction to Hash Tables", "Hash Functions", "Collision Handling", "Applications and Implementaions",],
            "Trees": ["Introduction to Trees", "Binary Trees", "Binary Search Trees (BST)", "AVL Tree", "B Tree", "Application",],
            "Tree Traversal": ["Pre-order Traversal", "In-order Traversal", "Post-order Traversal", "Level-order Traversal"],
            "Min Spanning Tree": ["Introduction to Minimum Spanning Trees (MST)", "Prim's Algorithm", "Kruskal's Algorithm", "Graph Representation and Data Structures",],
            "Recursive Tree": ["Introduction to Recursive Trees", "Recursive Tree Traversal Algorithms", "Tree Rotations", "Application",],
            "Heaps": ["Binary Heap", "Heap Operations", "Heap Sort", "Priority Queue", "Applications and Implementations",],
            "Graphs": [" Basic Concepts", "Graph Representation", "Graph Traversal Algorithms", "Graph Coloring", "Special Graphs and Properties", "Applications",],
            "Graph Traversal": ["DFS", "BFS", "Traversal Orders", "Graph Representation"],
            "Shortest Path Algorithms": ["Kruskal", "Prim's", "Dijkstra's",],
            "Recursion": ["Basic Recursion Concepts", "Mathematical Problems", "Array and String Manipulations", "Divide and Conquer Method", "Dynamic Programming", "Backtracking Algorithms"],
            "Bit Manipulation": ["Basic Bitwise Operators", "Bit Manipulation Techniques", "Bit Masks"],
            "Sorting Algorithms": ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort", "Quick sort", "Heap sort", "Counting sort", "Bucket sort", "Shell sort"],
            "Searching Alogrithms": ["Linear search", "Binary search"],
            "Divide and Conquer Algorithms": ["Defination"],
            "Greedy Algorithms": ["Defination"],
            "Dynamic Programming": ["Defination"],
            "Backtracking": ["Defination"],
        }
    },
    DC = {
        Name: "DC",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    CN = {
        Name: "CN",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    COA = {
        Name: "COA",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    ADA = {
        Name: "ADA",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    OOPM = {
        Name: "OOPM",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    DS = {
        Name: "DS",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },
    PS = {
        Name: "PS",
        Topics: ["A", "B", "C", "D", "E"],
        Modules: {
            "A": ["a", "b", "c", "d", "e"],
            "B": ["a", "b", "c", "d", "e"],
            "C": ["a", "b", "c", "d", "e"],
            "D": ["a", "b", "c", "d", "e"],
            "E": ["a", "b", "c", "d", "e"],
        }
    },

];
// for (let COURSE of COURSES) {
//     console.log(COURSE.Name);
//     for (let topic of COURSE.Topics) {
//         console.log("topic => ", topic);

//         // Access modules using the topic as a key
//         for (let topi of COURSE.Modules[topic]) {
//             console.log("\t\tModules => ", topi);
//         }
//     }
// }

const fs = require('fs');
const path = require('path');

// Define the root directory path
const rootDirectoryPath = '/Git hub/NEW/';

// Get the DSA course object
const dsaCourse = COURSES.find(course => course.Name === "DSA");

// Check if the DSA course exists
if (dsaCourse) {
    const dsaTopics = dsaCourse.Topics;
    const dsaModules = dsaCourse.Modules;

    // Create the root folder for the "DSA" course
    const dsaRootDirectory = path.join(rootDirectoryPath, 'DSA');
    fs.mkdir(dsaRootDirectory, { recursive: true }, (err) => {
        if (err) {
            console.error('Error creating DSA root folder:', err);
        } else {
            console.log(`Root folder 'DSA' created successfully`);

            // Iterate over each topic in the "DSA" course
            dsaTopics.forEach((topic) => {
                const topicDirectory = path.join(dsaRootDirectory, topic);
                // Create a new folder for the topic
                fs.mkdir(topicDirectory, { recursive: true }, (err) => {
                    if (err) {
                        console.error(`Error creating folder for topic '${topic}':`, err);
                    } else {
                        console.log(`Folder '${topic}' created successfully`);

                        // Check if the topic has associated modules
                        if (dsaModules.hasOwnProperty(topic)) {
                            const topicModules = dsaModules[topic];
                            // Iterate over each module in the topic
                            topicModules.forEach((module) => {
                                const moduleDirectory = path.join(topicDirectory, module);
                                // Create a new folder for the module
                                fs.mkdir(moduleDirectory, { recursive: true }, (err) => {
                                    if (err) {
                                        console.error(`Error creating folder for module '${module}' in topic '${topic}':`, err);
                                    } else {
                                        console.log(`Folder '${module}' created successfully in topic '${topic}'`);

                                        // Create files inside the module folder
                                        const fileNames = ['index.html', 'style.css', 'app.js'];
                                        fileNames.forEach((fileName) => {
                                            fs.writeFile(path.join(moduleDirectory, fileName), `Content of ${fileName}`, (err) => {
                                                if (err) {
                                                    console.error(`Error creating file '${fileName}' in module '${module}' in topic '${topic}':`, err);
                                                } else {
                                                    console.log(`File '${fileName}' created successfully in module '${module}' in topic '${topic}'`);
                                                }
                                            });
                                        });
                                    }
                                });
                            });
                        }
                    }
                });
            });
        }
    });
} else {
    console.error('DSA course not found.');
}
