# JavaScript Code Execution and Call Stack

When you run the program many things are happening behind the scene in the JavaScript Engine.

As everything in JS happens inside the execution context, and JS is not possible without the execution context, ***<mark>what exactly happens when you run the JS program?</mark>***

So whenever the program runs in JS the 1st that happens is the <mark>execution context is created</mark>.

We have a below function for a better explanation

```javascript
let n = 2;

function square(num) {
  let ans = num * num;
  return ans;
}

let squareFour = square(n);
let squareFive = square(5);

console.log(squreOne);
console.log(squreTwo);
```

Here is the function **<mark>square</mark>** which returns the square of the number (**<mark>num</mark>**), which is being passed inside the number, also there are 2 other variables **<mark>squareFour</mark>** and **<mark>squareFive</mark>** which are invoking the function.

Here the **<mark>Global execution context</mark>** is created and JS will allocate memory to all the variables and functions.

This takes place in **two-phases**

1. **<mark>Memory Allocation Phase</mark>**
    
2. **<mark>Code Execution Phase</mark>**
    

## Memory Execution Phase

As soon as the JS engine encounters the variable `let n = 2;` It will allocate the memory to `n` then JS will go to `line 2` it sees that there is also a function `square` it will allocate the memory for the function `square`.

When the memory is allocated for `variable n`, it stores the special value `undefined`. and in the case of a function, it stores the whole `code for the function` inside this memory space.

Also, it will allocate the memory space for variable **<mark>squareFour</mark>** and **<mark>squareFive</mark>** and will store the value **<mark>undefined</mark>**.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677012170306/df02bb76-8030-449d-a74d-2067378ba5a3.png align="center")

## **Code Execution Phase**

* Here **<mark>JS runs</mark>** once again through your code **<mark>line by line</mark>** and then it executes the code.
    
* This is the point where the **<mark>function</mark>** and **<mark>every calculation</mark>** in the program are done.
    
* And as soon as it encounters the `variable n` the `value undefined` is now been `replaced by 2` the value 2 is now been placed in the
    
    `placeholder or the identifier n`.
    
* when it encounters the function it sees it has nothing to do and moves to the next line and sees another variable **<mark>squareFour</mark> and <mark>squareFive</mark>.**
    
* Here, at **<mark>squareFour</mark> and <mark>squareFive</mark>** we have a function invocation when it encounters the functions name `square()` i.e. the `name` and `parenthesis`.
    
* It means that the function is now being executed, functions are the heart of JavaScript.
    
* `functions` over here are the mini-program, and whenever the function / mini-program is invoked a `new execution context` is created.
    
* The whole program was in the `Global Execution context` and when you run the function `mini execution context` is created.
    
* Again here 2 phases will be involved the `memory execution` phase and the `code execution` phase.
    
* Similarly, for the 1st line of the function argument, it will store `undefined` in `num`.
    
* ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677015662972/9e39a9f0-148b-4451-9266-eee97cde838f.png align="center")
    
* And same when it encounters the variable `ans` it will store `undefined`.
    
* Now, here the 2nd phase is called i.e. `code execution` takes place, where now when the function `square` is invoked the `value 2` is been passed to `num`.
    
* `num` here is the parameter of the function and `n` over here is an argument.
    
* `num` holds the value `2` and `ans` now becomes `4`.
    
* When the controls move to `next line` it encounters the `special` keyword `returns`.
    
* `return` <mark>key-word tells to return the whole control back to the</mark> `execution context` <mark>where the function was invoked.</mark>
    
* **<mark>when the</mark>** `return ans` **<mark>statement is executed it finds/searches the value in the local memory</mark>.**
    
* `ans` will now replace the `undefined` of `squareFour`.
    
* Then the whole execution of that function will be completely deleted.
    
* For **<mark>squareFive </mark>** same process will happen again with values `num: 5` and
    
    `ans: 25`.
    

As this is too much for JS to manage these things, as these things are very tough to manage, as they can go to any deep level where there are functions inside functions.

All this is been managed by the **STACK** also known as **CALL Stack**.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1677017266921/e166c3d4-dd8a-45c8-b69b-d2cdfc5c5105.png align="center")

The **Stack** here handles everything i.e. **creation**, **deletion** and **control** and at the bottom of this stack, we have the **global execution context**.

This `call Stack` is populated with this `global execution context`, whenever the function is invoked or `new execution context` is created this execution context is put inside the stack.

Once the `return` statement is encountered in the `mini execution` context is popped out and control goes back to GEC where it left off.

Hence, the `call stack` is only to manage the `execution context` once the whole thing is executed the `call stack` gets empty even global execution gets empty.

**<mark>Call Stack maintains the order of execution in the Execution Context.</mark>**

***Call Stack is also referred as***

* ### Execution Context Stack
    
* ### Program Stack
    
* ### Control Stack
    
* ### Runtime Stack
    
* ### Machine Stack