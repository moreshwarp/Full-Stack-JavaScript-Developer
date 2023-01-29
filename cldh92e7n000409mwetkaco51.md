# Position in CSS

# Introduction

* `Position` property in `CSS` determines the placement of the element in the `document`.
    
* These elements can be placed in 🔝top, ➡ right, bottom⬇️, left ⬅️ throughout the 📄 document.
    
* There are 4 properties to play with i.e. `position: static`, `position: absolute`, `position: relative`, `position: fixed`.
    

## `1. position: static`

* The `top` , `bottom` , `right` , `left` do not affect the element present in the 📄 document.
    
* And they shall have their default value.
    
* This is the default `position` of all the elements in the document.
    
* Even if the position property is not declared the `default` position is `static`.
    

## `2. position: relative`

* The `relative` property is the same as that of static but it would let you change the position of an element within the document.
    
* Here the value `top`, `right`, `bottom`, `left` will affect an `element`.
    
* And element will be adjusted from its normal position.
    
* The `property relative` changes the position of the element with respect to its `parent's position` or `container`.
    

## `3. position: absolute`

* The `absolute` property removes the element from the document and then the `top`, `bottom`, `left`, and `right` gets applied to it.
    
* Also, along with it, you need to add the property position `relative` to its parent.
    
* This will take the elements out of the flow of the document 📄.
    

## `4. position: fixed`

* The `fixed` will remove the element from the document flow and whatever `inset` properties you apply to an element will be applied to it.
    
* It would keep the element at its, specified position.
    

## `5. position: sticky`

* When you specify the `sticky` property to an element, the element is been positioned to its nearest element relative to its *nearest scrolling ancestor*.
    
* Scrolling elements containing `fixed` or `sticky` content can cause performance and accessibility issues.
    

### `Coding Reference`

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Positions in class</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./positions.css" />
  </head>
  <body>
    <!-- <section class="container">
      <div class="pos" id="first">1</div>
      <div class="pos" id="second">2</div>
      <div class="pos" id="third">3</div>
      <div class="pos" id="fourth">4</div>
    </section> -->
    <section class="wrapper">
      <div class="box-1">One 1</div>
      <div class="box-2">Two 2</div>
      <div class="box-3">Three 3</div>
      <div class="box-4">Four 4</div>
      <div class="box-5">Four 5</div>
    </section>

    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </body>
</html>
```

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* Position: sticky | absolute | relative |  */

/* .pos {
  border: 10px dotted red;
  position: relative;
  display: inline-block;
  top: 20px;
  padding: 20px;
  margin: 10px;
  width: 100px;
  height: 50px;
}

#third {
  position: relative;
  top: 50px;
  right: 30px;
  left: 15px;
  bottom: 20px;
  border: 10px solid #26ff00;
}

#fourth {
  position: absolute;
  top: 150px;
  right: 120px;
  left: 150px;
  bottom: 150px;
  border: 10px solid #ff00c8;
}

#second {
  position: fixed;
  left: 150px;
  border: 15px solid #777;
} */

/* position static */
.box-1 {
  position: static;
  /* inset: 50px; this property is not applicable as theposition is static */
  background-color: #ff6666;
  border: 5px solid;
  width: 250px;
  height: 250px;
}

.box-1,
.box-2,
.box-3,
.box-4,
.box-5 {
  color: #fff;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Position Relative */
.box-2 {
  position: relative;
  inset: 50px 50px 0 50px;
  background-color: #0c3234;
  margin: 10px 0 0 0;
  border: 5px solid;
  width: 250px;
  height: 250px;
}

body {
  position: relative;
}

/* Position Absolute */
.box-3 {
  position: absolute;
  inset: 300px;
  background-color: #6a1b4d;
  margin-top: 10px;
  border: 5px solid;
  width: 250px;
  height: 250px;
}

section {
  position: relative;
}

/* Position Sticky */
.box-4 {
  position: sticky;
  inset: 150px;
  background-color: #03203c;
  margin-top: 10px;
  border: 5px solid;
  width: 250px;
  height: 250px;
}

/* Position Fixed */
.box-5 {
  position: fixed;
  inset: 500px;
  /* color: #fff; */
  background-color: #03203c;
  margin-top: 10px;
  border: 5px solid;
  width: 250px;
  height: 250px;
}

li {
  padding: 10px;
}
```