# Selectors in CSS

# What are selectors in CSS?

They are use to select the elements in webpage (HTML), and main purpose to these selector is to make your webpage presentable and attractive.

It basically tells browser which HTML element is to be selected and what CSS value is to applied on them, the elements which are selected are referred as **subject of selectors**.

 
## 1.  Universal Selector

This selector is identified by  ** * ** and selects all the elements, 

## Syntax


```
* { style properties }
``` 


Here ** * **  is an optional with simple selector.

The CSS value added here is applicable across all the elements within the HTML webpage.



**For example**

```
      * {
        background-color: burlywood;
        color: red;
      }
``` 

Here, the color red would be applicable across all the text which will be rendered via HTML and along with it background.


### HTML Code  Block

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Individual Selectors</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      * p {
        background-color: beige;
        padding: 20px;
        margin: 20px 0;
      }

      *.container {
        background: rgb(233, 202, 202);
        width: 550px;
        height: 500px;
        color: #777;
      }

      p {
        font-size: 18px;
        padding: 20px;
        font-family: "Courier New", Courier, monospace;
        font-weight: 700;
      }

      p.para-1 {
        border: 10px solid green;
        color: red;
        padding: 10px;
      }

      section span {
        background-color: rgb(75, 68, 68);
        color: rgb(254, 244, 241);
        font-size: 20px;
        padding: 15px;
      }

      .container span {
        padding: 15px;
        width: 450px;
      }
    </style>
  </head>
  <body>
    <section class="container">
      <p class="para-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </p>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut?
      </span>

      <div class="para-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </div>

      <p class="para-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </p>

      <div class="para-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </div>
    </section>
  </body>
</html>
``` 

**Output**

![universal-output.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668375721320/FYxIQ9t9F.png align="left")


## `@namespace`

The universal selector is the special selector and hence can be **namespaced** when using `@namespace`. 

This is helpful when  you are dealing with multiple documents, say HTML with inline SVGs, MathML, or XML 


- `ns | *` - matches all the elements in the namespaces ns.
- `*|*` - matches all the elements.
- `|*` - matches all the elements without any declared namespace.

Also, The *asterisk *is optional with simple selectors. For instance, `*.className` and `.className` are equivalent.

For Example:

![star-selector.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668331595781/B0jlRji8l.png align="left")

**Output**:

![selector-class-ui.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668331624210/R2S5Qdfu2.png align="left")


## Individual Selectors

This is CSS selector where we can select the specific HTML element from the HTML page.

**Syntax**

```
elementName|tagname {
  color: red;
}
```
**For Example**


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Individual Selectors</title>
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      * p {
        background-color: beige;
        padding: 20px;
        margin: 20px 0;
      }

      *.container {
        background: rgb(233, 202, 202);
        width: 550px;
        height: 500px;
        color: #777;
      }

      p {
        font-size: 18px;
        padding: 20px;
        font-family: "Courier New", Courier, monospace;
        font-weight: 700;
      }

      p.para-1 {
        border: 10px solid green;
        color: red;
        padding: 10px;
      }

      section span {
        background-color: rgb(75, 68, 68);
        color: rgb(254, 244, 241);
        font-size: 20px;
        padding: 15px;
      }

      .container span {
        padding: 15px;
        width: 450px;
      }
    </style>
  </head>
  <body>
    <section class="container">
      <p class="para-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </p>

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, aut?
      </span>

      <div class="para-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </div>

      <p class="para-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </p>

      <div class="para-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit
        earum eaque nostrum deserunt maiores!
      </div>
    </section>
  </body>
</html>

``` 

**Output**:
![output_element_selector.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668375785607/bBXk36x54.png align="left")

## Class Selector 

The class selector selects an elements from the web page which matches it **class attribute** and applies the *subject to style* to them i.e. CSS Styling.


```.class_name { style properties }``` 

here, **.** instructs the *CSS* language to match the attribute members. This is very common patter in CSS, where special character or set of characters are is used to define the selector type.

Every time **.** is used it looks for the class attribute in webpage and applies the CSS i.e. which is being subjected to it.
 
Below is the example for the class selector


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Class and Id Selectors in CSS</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 20px;
        background-color: bisque;
        width: 500px;
      }

      p {
        font-size: 24px;
      }

      /* Class selector */
      .para-1 {
        color: rgb(11, 115, 80);
      }

      .para-2 {
        color: rgb(2, 87, 156);
      }

      .para-3 {
        color: rgb(156, 2, 25);
      }

      .laguages {
        font-size: 20px;
        font-weight: 700;
        padding: 20px;
      }

      .laguage {
        list-style: circle;
      }
    </style>
  </head>
  <body>
    <p class="para-1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, aliquid?
    </p>

    <p class="para-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quam
      obcaecati libero.
    </p>

    <p class="para-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      deserunt iste similique voluptate numquam ut exercitationem repellat
      dolorum rem inventore?
    </p>

    <ul class="laguages">
      <li class="laguage">HTML</li>
      <li class="laguage">CSS</li>
      <li class="laguage">JavaScript</li>
    </ul>
  </body>
</html>
``` 

**Output**:

![class_selector.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668377584864/ZfN2tIt8t.png align="left")

You can also select the elements with the help of class selector and apply the styling based on those selections as well.

**For example:**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Class and Id Selectors in CSS</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 20px;
        background-color: bisque;
        width: 500px;
        font-size: 32px;
      }

      body .heading {
        font-size: 28px;
        font-weight: 700;
        display: inline;
        background-color: aqua;
      }

      .laguages li {
        list-style: lower-greek;
        font-size: 24px;
        font-weight: 700;
        color: rgb(62, 103, 237);
      }
    </style>
  </head>
  <body>
    <h2 class="heading">Web Technology</h2>
    <ul class="laguages">
      <li class="laguage">HTML</li>
      <li class="laguage">CSS</li>
      <li class="laguage">JavaScript</li>
    </ul>
  </body>
</html>
``` 

**Output**:

![class_selector.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668378180896/RlN0G2rPp.png align="left")


## ID Selector

**ID** Selector too behave in same way as of **class** selector and selects the id attribute from the webpage.

**Syntax**:

```#id_value { style properties }```

**For example**:


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Class and Id Selectors in CSS</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        margin: 0;
        padding: 20px;
        background-color: bisque;
        width: 500px;
      }

      p {
        font-size: 24px;
      }

      /* Class selector */
      .para-1 {
        color: rgb(11, 115, 80);
      }

      .para-2 {
        color: rgb(2, 87, 156);
      }

      .para-3 {
        color: rgb(156, 2, 25);
      }

      .laguages {
        font-size: 20px;
        font-weight: 700;
        padding: 20px;
      }

      .laguage {
        list-style: circle;
      }

      .laguages li {
        list-style: lower-greek;
        color: rgb(62, 103, 237);
      }

      body .heading {
        font-size: 28px;
        font-weight: 700;
        display: inline;
        background-color: aqua;
      }

      .laguages li {
        list-style: lower-greek;
        font-size: 24px;
        font-weight: 700;
        color: rgb(62, 103, 237);
      }

      #list-33 > li {
        padding: 20px;
        background-color: rgb(148, 125, 170);
        color: rgba(47, 93, 81, 0.533);
      }

      body #para-11 {
        background-color: aquamarine;
      }
    </style>
  </head>
  <body>
    <p id="para-11" class="para-1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, aliquid?
    </p>

    <h2 id="heading-11" class="heading">Web Technology</h2>
    <ul id="list-33" class="laguages">
      <li class="laguage">HTML</li>
      <li class="laguage">CSS</li>
      <li class="laguage">JavaScript</li>
    </ul>
  </body>
</html>
``` 


**Output**:

![id.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668382838683/_QlYzWWRE.png align="left")


