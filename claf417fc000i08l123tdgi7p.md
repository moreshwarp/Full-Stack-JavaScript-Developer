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

