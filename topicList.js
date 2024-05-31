COURSESName = {
    "DSA": "Data Structures &amp; Algorithms",
    "DC": "Data Communication",
    "CN": "Computer Networks",
    "COA": "Computer Organization &amp; Architecture",
    "ADA": "Algorithms &amp; Data Structures",
    "OOPM": "Object Oriented Programming",
    "DS": "Data Structures",
    "PS": "Probability &amp; Statistics"
};
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
            "Basics of DSA": ["Introduction", "Classification of Data Structures", "Time Complexity", "Asymtotic Notations", "Space Complexity"],
            "Array": ["Insertion", "Deletion", "Updating", "Splitting", "Concatenation", "Filtering"],
            "String": ["Substring", "Length", "Searching", "Concatenation"],
            "Linked List": ["linked List basic things", "Singly Linked List", "Doubly Linked List", "Circular Linked List", "Applications"],
            "Stack": ["Basis Operations", "Infix,Prefix,and Postfix Notations", "Implementation", "Applications",],
            "Queue": ["Defination", "Basic Operations", "Dequeue", "Circular Queue", "Implementation", "Priority Queue", "Applications",],
            "Hash Tables": ["Introduction to Hash Tables", "Hash Functions", "Collision Handling", "Applications and Implementaions",],
            "Trees": ["Introduction to Trees", "Binary Trees", "Binary Search Trees (BST)", "AVL Tree", "B Tree", "Application",],
            "Tree Traversal": ["Pre-order Traversal", "In-order Traversal", "Post-order Traversal", "Level-order Traversal"],
            "Min Spanning Tree": ["Introduction to Minimum Spanning Trees (MST)", "Prim's Algorithm", "Kruskal's Algorithm", "Graph Representation and Data Structures",],
            "Recursive Tree": ["Introduction to Recursive Trees", "Recursive Tree Traversal Algorithms", "Tree Rotations", "Application",],
            "Heaps": ["Binary Heap", "Heap Operations", "Heap Sort", "Priority Queue", "Applications and Implementations",],
            "Graphs": ["Basic Concepts", "Graph Representation", "Graph Traversal Algorithms", "Graph Coloring", "Special Graphs and Properties", "Applications",],
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
        Topics: ["Computer Networks",
        "OSI Model",
        "Tcp/IP Protocol",
        "Physical layer",
        "Data Link Layer",
        "Medium Access Control (MAC)",
        "Network Layer",
        "Transport Layer",
         "Application Layer"],
        Modules: {
            "Computer Networks": ["Network Component and Categories", "Types of networks", "Topologies"],
        "OSI Model": ["Introduction","Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer", "Session Layer","Presentation Layer","Application Layer"],
        "Tcp/IP Protocol": ["Introduction", "Network Interface Layer (Link Layer)", "Internet Layer", "Transport Layer", "Application Layer"],
        "Physical layer": ["Transmission Media", "Bandwidth", "Multiplexing", "Switching"],
        "Data Link Layer": ["Framing", "Error Detection and Correction", "Flow Control", "Sliding Window Protocol","Protocol verification"],
        "Medium Access Control (MAC)": ["Introduction to MAC", "(BEB) Algorithm", "ALOHA and Slotted- ALOHA", "(CSMA, CSMA/CD, CSMA/CA", " Collision Free Protocols"],
        "Network Layer": [ "Routing algorithms", "IP Addresses", "IPv4 & IPv6", ],
        "Transport Layer": ["UDP", "TCP"],
         "Application Layer": ["WWW", "HTTP", "FTP", "SSH", "DHP","Email","Network Management"],
           
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
        Topics: ["Algorithms",
            "Complexity Analysis",
            "Heap and Heap Sort",
            "Divide and Conquer",
            "Dynamic Programming",
            "Greedy Algorithms",
            "Backtracking",
            "Graph Algorithms",
            "Hashing",
            "NP-Completeness and Computational Intractability",
            "Randomized Algorithms and Approximation Algorithms",
        ],
        Modules: {
            "Algorithms": ["Defination", "Designing Algorithms", "Analyzing Algorithms"],
            "Complexity Analysis": ["Introduction to Time Complexity", "Asymptotic Notations", "Analyzing Algorithm Efficiency", "Common Time Complexities", "Analyzing Different Algorithm Types"],
            "Heap and Heap Sort": ["Introduction to Heaps", "Operations on Heaps", "Heap Implementation", "Heap Sort Algorithm", "Applications of Heaps"],
            "Divide and Conquer": ["Introduction to Divide and Conquer", "Mathematical Foundation", "Merge Sort", "Quick Sort", "Binary Search", "Exponentiation by Squaring", "Matrix Multiplication"],
            "Dynamic Programming": ["Introduction to Dynamic Programming", "Fibonacci Sequence", "Knapsack Problem", "Matrix Chain Multiplication", "Floyd-Warshall Algorithm"],
            "Greedy Algorithms": ["Introduction to Greedy Algorithms", "Knapsack Problem", "Huffman Coding", "Kruskal's Algorithm", "Prim's Algorithm", "Dijkstra's Algorithm", "Longest Common Subsequence"],
            "Backtracking": ["Introduction to Backtracking", "N-Queens Problem", "Subset Sum Problem"],
            "Graph Algorithms": ["Introduction to Graphs", "Depth-First Search (DFS)", "Breadth-First Search (BFS)", "Bellman-Ford Algorithm", "Floyd-Warshall Algorithm", " Minimum Spanning Tree (MST) Algorithms", "Graph Isomorphism", "Eulerian Path and Circuit", "Hamiltonian Graph"],
            "Hashing": ["Introduction to Hashing", "Hash Tables", "Hash Functions", "Collision resolution", "Linear probing", "Quadratic Double Hashing", "Bucket Hashing", "Deletion and Rehashing"],
            "NP-Completeness and Computational Intractability": ["Introduction to NP Problems", " NP-Complete Problems", "NP-Hard Problems", "Reductions", "Common NP Problems", "Satisfiability problem"],
            "Randomized Algorithms and Approximation Algorithms": ["Introduction to Randomized Algorithms", "Introduction to Approximation Algorithms"],
        },
    },
    OOPM = {
        Name: "OOPM",
        Topics: ["Introduction to Object-Oriented Programming",
            "JDK and JVM",
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
            "Exception Handling",
            "Concept of Packages",
            "Threads",
        ],
        Modules: {
            "Introduction to Object-Oriented Programming": ["Procedural Programming", "ObjectOriented Programming", "Key Concepts and Terminology", "Comparison of Procedural and Object-Oriented Programming"],
            "JDK and JVM": ["Java Development Kit JDK", "JDK Tools and Utilities", "Java Class Library", "Writing Compiling and Running Java Programs", "Java Virtual Machine JVM"],
            "Encapsulation": ["Definition and Importance of Encapsulation", "Concept of Classes and Objects", "Access Modifiers", "Data Hiding"],
            "Inheritance": ["Basic Concepts", "Single Inheritance", "Multilevel Inheritance", "Hierarchical Inheritance", "Constructors", "Keywords super abstract final"],
            "Polymorphism": ["Introduction to Polymorphism", "Compiletime Polymorphism", "Runtime Polymorphism", "Advantages of Polymorphism"],
            "Abstraction": ["Introduction to Abstraction", "Abstract Classes", "Interfaces", "Benefits of Abstraction"],
            "Exception Handling": ["Introduction to Exception Handling", "The Exception Hierarchy", "Handling Multiple Exceptions", "Checked vs Unchecked Exceptions", "Custom Exceptions", "Exception Propagation"],
            "Concept of Packages": ["Definition of a Package", "Creating and Using Packages", "Access Control and Packages"],
            "Threads": ["Introduction to Threads", "Creating and Starting Threads", "Thread Lifecycle", "Thread Synchronization", "Synchronized methods", "Synchronized block"]

        }
    },
    DS = {
        Name: "DS",
        Topics: ["Sets",
            "Relations",
            "Functions",
            "Proving Techniques",
            "Algebraic Structures",
            "Propositional Logic",
            "Graph Theory",
            "Posets Hasse Diagram and Lattices",
            "Combinatorics"],
        Modules: {
        "Sets": ["Set Theory", "Venn Diagrams", "General Properties", ],
        "Relations": ["Definition", "Properties", "Reflexive", "Symmetric", "Transitive","Equivalece","Partial ordering relation"],
        "Functions": ["Definition", "Properties", "One-to-One", "Onto", "Inverse function","Composition of functions","Pigeonhole principle"],
        "Proving Techniques":["Mathematical induction", " Proof by contradiction"],
        "Algebraic Structures": ["Definition", "Semi Groups", "Monoid Groups", "Abelian Groups", "Subgroup","Cyclic Group","Homomorphism and Isomorpism","Rings and Fields"],
        "Propositional Logic": ["Proposition", "First order logic", "Basic logical operation", "Truth tables", "Tautologies","Contradictions"," Normal Forms"],
        "Graph Theory": ["Basics of Graph", "Planer graphs", "Multigraphs and weighted graphs", "", "e"],
        "Posets,Hasse Diagram and Lattices": ["a", "b", "c", "d", "e"],
        "Combinatorics" : ["a", "b", "c", "d", "e"],        
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
const courseSubArrays = {
    "dsa": DSA,
    "dc": DC,
    "cn": CN,
    "coa": COA,
    "ada": ADA,
    "oopm": OOPM,
    "ds": DS,
    "ps": PS
};

// for (let COURSE of COURSES) {
//     console.log(COURSE.Name);
//     for (let topic of COURSE.Topics) {
//         console.log("topic => ", topic);

//         for (let topi of COURSE.Modules[topic]) {
//             console.log("\t\tModules => ", topi);
//         }
//     }
// }