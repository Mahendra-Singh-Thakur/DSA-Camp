let STACK = document.getElementById('stack');

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
    }

    top() {
        if (this.items.length === 0) return "No elements";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

const stack = new Stack();

document.getElementById('pushBtn').addEventListener('click', () => {
    const value = document.getElementById('pushValue').value;
    if (value.trim() === '') {
        alert('Cannot push an empty value');
    } else {
        if (stack.size() <= 11) {
            stack.push(value);
            let li = document.createElement('li');
            li.setAttribute("class", 'ele');
            li.textContent = value;
            STACK.prepend(li);
            document.getElementById('pushValue').value = '';
        }
        else {
            alert('Cannot push Stack is Full');
        }
    }
});
document.getElementById('pushValue').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const value = this.value.trim();
        if (value !== '') {
            if (stack.size() <= 11) {
                stack.push(value);
                let li = document.createElement('li');
                li.setAttribute("class", 'ele');
                li.textContent = value;
                STACK.prepend(li);
                document.getElementById('pushValue').value = '';
                this.value = '';
            }
            else {
                alert('Cannot push Stack is Full');
            }
        }
        else {
            alert('Cannot push an empty value');
        }
    }
});
document.getElementById('popBtn').addEventListener('click', () => {
    if (stack.isEmpty()) {
        alert('Cannot Pop from an empty stack');
    } else {
        stack.pop();
        var stackDiv = document.getElementById("stack");
        var liElements = stackDiv.getElementsByTagName("li");
        if (liElements.length > 0) {
            stackDiv.removeChild(liElements[0]);
        }
    }
});

document.getElementById('topBtn').addEventListener('click', () => {
    if (stack.isEmpty()) {
        alert('The stack is empty');
        document.getElementById('topValue').textContent = '-';
    } else {
        const topValue = stack.top();
        document.getElementById('topValue').textContent = topValue;
    }
});

document.getElementById('isEmptyBtn').addEventListener('click', () => {
    const isEmpty = stack.isEmpty();
    document.getElementById('isEmptyValue').textContent = isEmpty ? 'True' : 'False';
});

document.getElementById('sizeBtn').addEventListener('click', () => {
    const size = stack.size();
    document.getElementById('sizeValue').textContent = size;
});

window.onload = () => {
    document.getElementById('pushValue').focus();
};