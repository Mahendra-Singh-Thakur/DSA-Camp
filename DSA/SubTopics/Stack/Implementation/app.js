let stack = [];

function push() {
    const input = document.getElementById('stackInput');
    const value = input.value.trim();

    if (value) {
        stack.push(value);
        input.value = '';
        displayStack();
    } else {
        alert('Please enter a value');
    }
}

function pop() {
    if (stack.length > 0) {
        stack.pop();
        displayStack();
    } else {
        alert('Stack is empty');
    }
}

function displayStack() {
    const stackContainer = document.getElementById('stackContainer');
    stackContainer.innerHTML = '';

    stack.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'stack-item stack-item-enter';
        div.textContent = item;
        
        setTimeout(() => {
            div.classList.add('stack-item-enter-active');
        }, 10);

        stackContainer.appendChild(div);
    });

    const existingItems = stackContainer.children;
    for (let i = 0; i < existingItems.length; i++) {
        const item = existingItems[i];
        item.classList.add('stack-item-exit');
        setTimeout(() => {
            item.classList.add('stack-item-exit-active');
        }, 10);
    }
}
