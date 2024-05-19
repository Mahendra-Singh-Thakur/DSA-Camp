// #include <iostream>
// using namespace std;

// class node
// {
// public:
//     int data;
//     node *next;
//     node(int val, node *ptr) : data(val), next(ptr) {}
// };

// class Stack
// {
// public:
//     node *top;
//     Stack()
//     {
//         top = NULL;
//     }
//     ~Stack(); // Destructor
//     void push(int);
//     int Top();
//     void pop();
//     bool empty();
//     void display();
// };

// Stack::~Stack()
// {
//     while (top)
//     {
//         node *temp = top;
//         top = top->next;
//         delete temp;
//     }
// }

// int Stack::Top()
// {
//     if (!top)
//     {
//         throw runtime_error("Stack is empty");
//     }
//     return top->data;
// }

// bool Stack::empty()
// {
//     return !top;
// }

// void Stack::pop()
// {
//     if (!top)
//     {
//         throw runtime_error("Stack is empty");
//     }
//     node *temp = top;
//     top = top->next;
//     delete temp;
// }

// void Stack::push(int val)
// {
//     top = new node(val, top);
// }

// void Stack::display()
// {
//     node *current = top;
//     while (current)
//     {
//         printf("||%5d ||\n", current->data);
//         cout << "||^^^^^^||\n";
//         current = current->next;
//     }
// }

// int main()
// {
//     Stack st;
//     try
//     {
//         st.push(1);
//         st.push(2);
//         cout << st.top() << endl;
//         st.display();
//         cout << "Top element: " << st.Top() << endl;
//         st.pop();
//         cout << "Top element after pop: " << st.Top() << endl;
//         st.pop();
//         st.display();
//         // cout << st.Top() << endl;
//         st.pop();
//     }
//     catch (const exception &e)
//     {
//         cout << e.what() << endl;
//     }
//     return 0;
// }

#include <bits/stdc++.h>
using namespace std;
bool fun(double n)
{
    if (n == 1)
    {
        return true;
    }
    else if (n < 1)
    {
        return false;
    }
    return fun(n / 3);
}
int main()
{
    int n = 30;
    cout << n % 3 << endl;
    // cout << fun(n);
    return 0;
}