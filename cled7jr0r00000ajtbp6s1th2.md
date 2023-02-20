# JavaScript Execution Context

## **<mark>Everything in JavaScript happens inside the Execution Context.</mark>**

We can assume the execution context to be the big box🗃 container in which the whole JavaScript is executed.

So the execution context has 2 components in it.

1. **Memory Component**
    
2. **Code Component**
    

### **<mark>Memory Component / Variable Environment</mark>**

* It has a **<mark>key: value</mark>** pair to store the variable, and similarly, the functions are also stored here.
    
* This memory component is also known as a **<mark>variable environment</mark>**.
    

### **<mark>Code Component / Thread of Execution</mark>**

* Here the code is executed **one line at a time**. also know the **<mark>thread of execution</mark>**.
    
* The thread of execution is a thread is just thread where the code is executed one line at a time.
    

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1676920395269/39d82294-44a2-411b-9d43-9c1d070f192e.png align="center")

***<mark>JavaScript is a Synchronous Single threaded Language</mark>***

The reason it's called a **<mark>thread of execution</mark>** is that it's like a **<mark>single thread</mark>** where the code is executed line by line.

When we say **Synchronous Single threaded** that means JavaScript can execute single command at a time and that too in a specific order.

<mark>This means it can go to the other line only when its previous line is executed.</mark>

And JavaScript is not possible without this beautiful execution context at all.