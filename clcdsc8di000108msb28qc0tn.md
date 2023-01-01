# Array and Array Methods in JavaScript.

# **What is an <mark>Array</mark> in JavaScript?**

An **array** is where you can store the **<mark>collection of multiple items</mark>** **under/in** one variable and has members for performing common array operations.

## **Why do we use Arrays?**

They are useful to store the value of different data types may it be ***<mark>boolean</mark>***, ***<mark>object</mark>***, ***<mark>string</mark>***, ***<mark>number</mark>***, ***<mark>symbol</mark>*** etc.

An ***array*** is an <mark>ordered list </mark> of values that you refer to with a name and an index.

Arrays are reliable it provides various multiple inbuilt methods that help perform various operations on the values which are stored in an array.

### **Declaration of Array**

### **Array declaration can be done in the following 2 ways.**

```javascript
// Way's to decleare Arrays
const studentRecord = ["tom", { rollNumber: 23 }, true, 8];
const recordStudent = new Array("tom", { rollNumber: 23 }, true, 8);
console.log("Method 1" + studentRecord + "Metrhod 2" + recordStudent);
```

### **Access the elements from the array**

```javascript
const studentRecord = ["tom", { rollNumber: 23 }, true, 8];
console.log( studentRecord[2]);
```

### **Find the length of an array**

```javascript
// Find the legth of an array
const studentRecord = ["tom", { rollNumber: 23 }, true, 8];
console.log(studentRecord.length);
```

## **Array Methods in JavaScript**

### **1\. <mark>Join()</mark> Method**

*   Creates and returns the new string by concatenating the elements present in the array, separated by the commas or by the separated strings.
    
*   Below is an example of the same.
    

```javascript
const temp_1 = ["Address", "Name", "PhoneNo"];
const concat_string = temp_1.join(["MH", "Moreshwar", 9365655000]);
console.log(concat_string);
```

### **2\. <mark>🍕 slice()</mark> Method**

*   The `slice()` the method returns the portion of an array into a new array object selected from the start to 🔚.
    
*   However, here the <mark>end is not included</mark>.
    
*   <mark>🔚 represents the index</mark> of the item in that array.
    
*   <mark>-ve</mark> index count from the <mark>end</mark> <mark>🔚</mark> of the array.
    

```javascript
// slice() method
slice()
slice(start)
slice(start, end)

*****************************   SYNTAX    *****************************

const books = ["Zero to One" "1984","Dark Matters","Animal Farm","Sapiens"];

console.log(books.slice(2, 5)); // [ Dark Matters, Animal Farm, Sapiens]

console.log(books.slice(-2)); // [ Animal Farm, Sapiens]

console.log(books.slice(3, -2)); // []

console.log(books.slice(2, -1)); // [Dark Matters, Animal Farm]
```

### **3\. <mark>indexOf()</mark> Method**

*   Returns the <mark>first index</mark> at which a given element can be found in the array, or it will return <mark>-1</mark> if the element is not present in the array.
    

```javascript
indexOf(searchElement)
indexOf(searchElement, fromIndex)

*****************************   SYNTAX    *****************************

const employeeData = ["tom", "john", "peter", "steven"];

console.log(employeeData.indexOf("tom")); // will return 0

console.log(employeeData.indexOf("steven", 2)); 
// This will start search from 2nd index in array employeeData and return 3

console.log(employeeData.indexOf("peter", 3)); 
// This will start search from 3rd index in array employeeData
```

## **To Add The Elements In The Array**

### **4\. <mark>push()</mark> Method**

*   The `push()` the method adds the element at the end of an array and returns the new array with 🆕 <mark>new</mark> length.
    
*   The `push()` method appends values to an array.
    
*   The `push()` is mutating method elements are added at the end 🔚.
    

```javascript
push(element0)

push(element0, element1)

push(element0, element1, /* … ,*/ elementN)
```

*   **Example**
    

```javascript
// push() method
console.log("push() Method");
const bookStack = [ "One Of Us Is Lying", "Hooked", "Meditations",
                    "THE SILENT PATIENT",];

console.log(bookStack ' ' +bookStack.length); 
// One Of Us Is Lying,Hooked,Meditations,THE SILENT PATIENT 4

bookStack.push("When Breath Becomes Air", "1984");

console.log(bookStack + ' ' +bookStack.length);
// ['One Of Us Is Lying', 'Hooked', 'Meditations', 'THE SILENT PATIENT', 'When Breath Becomes Air', '1984'] 6
```

#### **Merging 2**

```javascript
const test_📙_1 = ["a","b","c"];
const test_📙_2 = ["e", "f", "g"];

console.log(test_📙_1.push(test_📙_2));
// ["a","b","c","e", "f", "g"];
```

## **5\. <mark>Splice()</mark> Method**

*   This method will help you to <mark>remove </mark> the <mark>targeted element </mark> from an array collection and add/replace it.
    

```javascript
// splice() Method
// This method is been used for changing the content of an array by removing or replacing existing elements or adding new elements to an existing array without modifying them

bookStack.splice(3, 4, "Dune");
console.log(bookStack);

bookStack.splice(8, 9, "Upgrade5");
console.log(bookStack);

bookStack.splice(4, 5, "Hooked");
console.log(bookStack);
```