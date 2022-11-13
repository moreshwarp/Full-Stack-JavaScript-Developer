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



For example

```
      * {
        background-color: burlywood;
        color: red;
      }
``` 

Here, the color red would be applicable across all the text which will be rendered via HTML and along with it background.

### HTML Code  Block

![universal-selector-code.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668329716724/Stnh5GoEU.png align="left")


### Output

![universal-selector-ui.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668329760082/OyiUjuOLR.png align="left")

## `@namespace`

The universal selector is the special selector and hence can be **namespaced** when using `@namespace`. 

This is helpful when  you are dealing with multiple documents, say HTML with inline SVGs, MathML, or XML 


- `ns | *` - matches all the elements in the namespaces ns.
- `*|*` - matches all the elements.
- `|*` - matches all the elements without any declared namespace.

Also, The *asterisk *is optional with simple selectors. For instance, `*.className` and `.className` are equivalent.

For Example:

![star-selector.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668331595781/B0jlRji8l.png align="left")

Output:

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

![individual-selectors-code.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668332944028/dIDh3GfRh.png align="left")


**Output**

![individual-element.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1668333075267/kKnZlrlkc.png align="left")
