let COURSES = [
    DSA = {
        Name: "DSA",
        Topics: ["Bascis of DSA",
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
            "Bascis of DSA": ["Introduction", "Classification of Data Structures ", "Time Complexity", "Asymtotic Notations", "Space Complexity"],
            "Array": ["Insertion", "Deletion", "Updating", "Splitting", "Concatenation", "Filtering"],
            "String": ["Substring", "Length", "Searching", "Concatenation"],
            "Linked List": ["linked List basic things", "Singly Linked List", "Doubly Linked List", "Circular Linked List", "Applications"],
            "Stack": ["Defination", "Basis Operations", "Infix,Prefix,and Postfix Notations", "Implementation", "Applications",],
            "Queue": ["Defination", "Basic Operations", "Dequeue", "Circular Queue", "Implementation", "Priority Queue", "Applications",],
            "Hash Tables": ["Introduction to Hash Tables", "Hash Functions", "Collision Handling", "Applications and Implementaions",],
            "Trees": ["Introduction to Trees", "Binary Trees:", "Binary Search Trees (BST)", "AVL Tree", "B Tree", "Application",],
            "Tree Traversal": ["Pre-order Traversal", "In-order Traversal", "Post-order Traversal", "Level-order Traversal"],
            "Min Spanning Tree": ["Introduction to Minimum Spanning Trees (MST)", "Prim's Algorithm", "Kruskal's Algorithm", "Graph Representation and Data Structures",],
            "Recursive Tree": ["Introduction to Recursive Trees", "Recursive Tree Traversal Algorithms", "Tree Rotations", "Application",],
            "Heaps": ["Binary Heap", "Heap Operations", "Heap Sort", "Priority Queue", "Applications and Implementations",],
            "Graphs": [" Basic Concepts", "Graph Representation", "Graph Traversal Algorithms", "Graph Coloring", "Special Graphs and Properties", "Applications",],
            "Graph Traversal": ["DFS", "BFS", "Traversal Orders", "Graph Representation"],
            "Shortest Path Algorithms": ["Kruskal", "Prim's", "Dijkstra's",],
            "Recursion": ["Basic Recursion Concepts", "Mathematical Problems", "Array and String Manipulations", "Divide and Conquer Method", "Dynamic Programming", "Backtracking Algorithms"],
            "Bit Manipulation": ["Basic Bitwise Operators", "Bit Manipulation Techniques", "Bit Masks", "d", "e"],
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

// Define the directory path, folder name, and file names
let directoryPath = '/Git hub/NEW';

for (let topic of DSA.Topics) {
    const folderNam = `${topic}`;
    // console.log("topic => ", topic);
    fs.mkdir(path.join(directoryPath, folderNam), (err) => {
        if (err) {
            console.error('Error creating folder:', err);
        } else {
            console.log('Folder created successfully');
        }
    });
}
for (let topic of DSA.Topics) {
    // console.log("topic => ", topic);
    const folderNam = `${topic}`;
            directoryPath = `/Git hub/NEW/${folderNam}`;
    for (let topi of DSA.Modules[topic]) {
        // console.log("\t\tModules => ", topi);
        const folderName = `${topi}`;
        const fileNames = [`index.html`, `style.css`, `app.js`];

        // Create a new folder
        fs.mkdir(path.join(directoryPath, folderName), (err) => {
            if (err) {
                console.error('Error creating folder:', err);
            } else {
                console.log('Folder created successfully');

                // Loop through each file name and create a new file inside the folder
                fileNames.forEach((fileName, index) => {
                    fs.writeFile(path.join(directoryPath, folderName, fileName), `Content of file ${index + 1}`, (err) => {
                        if (err) {
                            console.error(`Error creating file ${fileName}:`, err);
                        } else {
                            console.log(`File ${fileName} created successfully`);
                        }
                    });
                });
            }
        });
    }
}
