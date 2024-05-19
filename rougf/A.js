class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(val) {
        this.top = new Node(val, this.top);
    }

    Top() {
        if (!this.top) {
            throw new Error("Stack is empty");
        }
        return this.top.data;
    }
    // top() {
    //     if (!this.top) {
    //         throw new Error("Stack is empty");
    //     }
    //     return this.top.data;
    // }
    pop() {
        if (!this.top) {
            throw new Error("Stack is empty");
        }
        let temp = this.top;
        this.top = this.top.next;
        temp = null; // Optional: Helps in garbage collection
    }

    empty() {
        return !this.top;
    }

    display() {
        let current = this.top;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const st = new Stack();
try {
    st.push(1);
    st.push(2);
    st.display();
    console.log(st.empty());
    console.log(st.Top());
    st.pop();
    console.log(st.Top());
    st.pop();
    st.display();
    console.log(st.empty());
} catch (error) {
    console.log(error.message);
}
