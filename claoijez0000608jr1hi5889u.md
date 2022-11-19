# JS code execution

- Let's assume our code has just been complied, post compliation the **_Global Execution Context(GEC)_** is created. There can be only one _**GEC**_ irrespective the size of JS project.
  


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fmoksr90lffgsbf8kucj.png)



- Inside the Gclobal Execution Context(GEC), the top level code is been executed (i.e Code which is out side the function is executed).

- This includes variable decleration, functions which are decleared etc.

- But remember the code inside the function is **NOT** been executed, it shall be executed only when the function is been **call**.

##### Here 1st we should find out What is Gobal Execution context/ Execution Context and how is it important.

- Enviornment where the piece of code JS Code is executed such as loal variables, arguments passed in etc.

- In short the JS Code always run inside the Execution Context.

- As there can be always one **_GEC_** , there is an default context where the code is executed.

- For every function call there is **_new execution context_** is created. Which contains all the necessary information required to excute the funcion.

- Once the Top level code is finished the top level code is executed.




##### What is Inside the _Execution Context_?


- **Variable Enviorement**
  - let, const, var, Decleration.
  - Functions
  - Aurgments Object (All function arguments that current execution context belong to).

- **The Function get's its execution context as soon as its been call**.
  - So all the variables decleared inside the function shall be executed, and these can also be accessed outside the function.
  - This is possible because of the **Scope Chain**.
  - **Scope Chain** are the references to the variable loated outside the function. 
  - And to keep track of each function it is been stored in **Execution Context**.

- **Each Execution Context gets _this_ keyword**. 

   - So inside the execution context 
      1. Variable Enviornment 
      2. Scope Chain
      3. _this_ keyword

(_Note_: Arrow function **do not** get **this** keyword and argument object insted they can if required use it from the closest parent function.)



![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g77evi23tj8r1xtgxqh4.png)


- Here **call Stack** comes into picture, Call stack is the place where execution context gets stacked on the top of each other to keep the tarck of where we are in the execution.


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dvu3yvo41ysw6q03n7gx.png)
 

- Once this is completed it would be removed from stack and control should be passed on to **Previous Execution Context** return statment from the function will indicate current execution context shall be **poped** out of the call stack.    

- And thus return statement plays and important role in givinig call to the previous execution context.

- In the end Global execution shall be executed.

- The Program will remian in state as is until its finished (i.e Browser window is closed.)


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lroph0hy3qujbcbv35wr.png)






 
 
