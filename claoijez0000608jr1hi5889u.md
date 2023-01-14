# Execution of JS Code 🧑‍💻👨‍💻

* Let's assume our code has just complied, post compilation the Global ***Execution Context(GEC)*** is created. There can be only one ***GEC irrespective of*** the size of the JS project.
    

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fmoksr90lffgsbf8kucj.png align="left")

* Inside the Global Execution Context(GEC), the top-level code is been executed (i.e Code that is outside the function executed).
    
* This includes variable declaration, functions that are declared etc.
    
* But remember the code inside the function is **NOT** been executed, it shall be executed only when the function is been **called**.
    

##### Here 1st we should find out What is Global Execution context/ Execution Context and how is it important.

* An environment where the piece of code JS Code is executed such as local variables, arguments passed in etc.
    
* In short, the JS Code always runs inside the Execution Context.
    
* As there can be always one ***GEC***, there is a default context where the code is executed.
    
* For every function call, there is ***new execution context*** is created. Which contains all the necessary information required to execute the function.
    
* Once the Top level code is finished the top-level code is executed.
    

##### What is Inside the *Execution Context*?

* **Variable Environment**
    
    * let, const, var, Decleration.
        
    * Functions
        
    * Arguments Object (All function arguments that the current execution context belongs to).
        
* **The Function get's its execution context as soon as it's been called**.
    
    * So all the variables declared inside the function shall be executed, and these can also be accessed outside the function.
        
    * This is possible because of the **Scope Chain**.
        
    * **Scope Chains** are the references to the variable located outside the function.
        
    * And to keep track of each function it is been stored in **Execution Context**.
        
* **Each Execution Context gets *this* keyword**.
    
    * So inside the execution context
        
        1. Variable Environment
            
        2. Scope Chain
            
        3. *this* keyword
            

(*Note*: Arrow function **does not** get **this** keyword and argument object instead they can if required use it from the closest parent function.)

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g77evi23tj8r1xtgxqh4.png align="left")

* Here **call Stack** comes into the picture, Call stack is the place where the execution context gets stacked on top of each other to keep track of where we are in the execution.
    

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dvu3yvo41ysw6q03n7gx.png align="left")

* Once this is completed it would be removed from the stack and control should be passed on to **the Previous Execution Context return state**ment from the function will indicate current execution context shall be **popped** out of the call stack.
    
* And thus return statement plays an important role in giving a call to the previous execution context.
    
* In the end, Global execution shall be executed.
    
* The Program will remain in the state as is until its finished (i.e Browser window is closed.)
    

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lroph0hy3qujbcbv35wr.png align="left")