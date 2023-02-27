# Function Execution in JavaScript

To see how are these functions executed in JavaScript let's take the reference of the following example.

```javascript
1. var x = 1;
2. a();
3. b();
4.
5. console.log(x);
6.
7. function a() {
8.   var x = 10;
9.   console.log(x);
10.}
11.
12. function b() {
13.   var x = 100;
14.   console.log(x);
15. }
```

Here when the code is executed line by line, in this scenario the very 1st thing that happens is the **Global Execution context** (***GEC***) is created and then this GEC is then stored in the **Call Stack**.

In this GEC there are 2 Components

1. <mark>Memory Component</mark>(***Variable Environment***)
    
2. <mark>Code Component</mark> (***Thread of Execution***).
    

Whereas this takes place in 2 phases

* **Memory allocation Phase**
    
* **Code Execution Phase**
    

So, In this 1st phase here the <mark>variables </mark> and `functions code` is allocated memory when it's in *the memory allocation phase*.

`Note`: Here function code points to the block of code where the actual block of code is been stored in it.

So, considering the above example `x` will have a value as `undefined` and function `a()` & `b()` will point towards its block of code.

However, this is the `1st phase` we are talking about is when the code component i.e. `the thread of execution` the var `x` gets its value i.e. `1` and execution control gets transferred to the next line where the `a()` is been invoked.

When the function `a()` is been invoked in this a **mini-execution context** is created for the same where again the same process takes place in 2 phases

1. <mark>Memory Allocation phase</mark>
    
2. <mark>Code Execution phase</mark>
    

And during the memory allocation phase, the local variables and functions are been reserved space for in this case, those are `x` and their value shall be `undefined`.

In `2nd phase`, the value of x will then be updated to `10` and control goes to the next line and logs the value of `x` i.e `10` to console from the local memory space which is created by the `mini-execution` context.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677522338551/7f6e31b5-fdca-41a5-8dd2-df0e014ce08d.png align="center")

While this `mini-execution context` is created for function `a()`. it is stored in the call stack until the value of `x` i.e. `10` is logged in the console.

Also, once this is done the `mini-execution context` created for a() is been destroyed and is been `popped out` from the call stack.

And now the control is been transferred to line number 3 i.e. `b()` and here again the `mini-execution context` is been created for `b()` and the same is been pushed in the `call stack`.

Please refer to the below use case for the same.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677525450851/0c1edd3a-c1b3-45d7-ab50-b1e3549953fe.png align="center")

Initially the `x` will have a value as undefined and in 2nd phase will be updated with `100`.

Once the value of `x` i.e `100` is been `logged` to `console` this mini execution context for a function `b()` is `destroyed` and control goes back to the line `number 3`.

Finally the value of `x` i.e. `1` is been initialized and then logged to the console and the Global execution context is too destroyed and the complete code is executed.

`Reference for Developers tool`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677525949889/26c964f3-3a18-4f9a-a21c-06d911144cdf.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677525992990/77b3e143-03e7-410f-b612-e5cbec02e16d.png align="center")