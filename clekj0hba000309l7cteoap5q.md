# Hoisting in JS✍️

Hosting in JavaScript refers to a process in which the `declarations` in the `code` appears to move at the top of the code before execution.

Remember its a `declaration` that moves not the `initialization`.

**Note**: `JavaScript only hosts the declarations, not the initializations. Initialization is only done when the control is transferred to the line of the execution.`

Also with `let` and `var` the `hosting` is different.

To know the Hosting in JS in detail let's study the following Example.

```javascript
var x = 10;
function getName() {
  console.log("Hosting in JavaScript");
}
console.log(x); // 10
getName(); // Hosting in JavaScript
```

Here, the output of the code will be straightforward `x` value would give `10`, and by invoking the `getName()` function will print `Hosting in JavaScript`.

Now, let's see the same example by making some minor changes to it.

```javascript
console.log(x); 
// undefined, // here the variable x is hosted but not initilized. 

getName();
// Hosting in JavaScript // Function is as is been stored in the allocated memory while the execution context is created.   

var x = 10;
function getName() {
  console.log("Hosting in JavaScript");
}
```

As to execute any JS code we will need the `Global Execution Context` **<mark>GEC</mark>.** Here too the Global execution context will be created and as there are 2 phases in the `GEC`.

where the memory will be assigned to variables and functions, with the initial value of the variable will be `undefined` and function code shall be stored as is in it.

Hence when we try to access/use the variable i.e. `x` before its declaration, in this case, it will give us the output as undefined.

whereas when we try to invoke the function before its declaration the memory allocation is already been done and the code is stored in the memory during the initial skimming by the JS Engine.

Hence, we will see the o/p as `Hosting in JavaScript` for function calls and `undefined` for `x`.

## Hosting using `let`

This can be understood with the following example

```javascript
// Temperol DeadZone
console.log(getName()); // Function will give o/p: Hosting in JavaScript.
//
//
console.log(x);  // Temperol DeadZone
// Referernce Error: Cannot access the variable before its initilized.
//
//
// Temperol DeadZone
//
//
let x = 10; // Initilization.

function getName() {
  console.log("Hosting in  JavaScript");
}
```

Here, in the above example, we are accessing the variable `x` which is declared using the `let keyword` it falls under **Temporal Dead Zone (TDZ)**. This doe's not mean that the variable is not hosted, but you won't be able to use that variable unless it is been initialized.

The same thing happens to be with `const`.

**Note**: For Function Expression and Arrow functions they are been treated as variables and hence they too will behave in the same way as they did with `let` and `const`.