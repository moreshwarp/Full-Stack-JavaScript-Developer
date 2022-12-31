# HTML Elements

The main tag in HTML is **<mark>&lt;html&gt;</mark>** which is the root of all the tags among the tags present for any webpage. It's also known as the root element and in this case, all other elements would be the decedent of the root i.e. &lt;html&gt; element.

This **<mark>&lt;html&gt;</mark>** is then been divided into 2 i.e. <mark>&lt;head&gt;</mark> and <mark>&lt;body&gt;</mark>. Let's talk about MetaData, as it contains all the information regarding the such as styling scripting and also helps to connect with the page (i.e. *external resources*) ***<mark>CSS.</mark>***

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
// It encodes most common characters, basics numbers,english with 8 // bits. 
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//
    <title>Html Elements</title>
  </head>
  <body>
    <!-- HTML Elements -->
  </body>
</html>
```

## Sectioning Root

It also knows as `<body></body>` tag which consists of all the content which is going to render on the web page.

## Content sectioning

This allows you to organize the document logically, which helps to create the logical structure for the content on your web page, including header, footer, navigation and headline elements to identify the content.

<table><tbody><tr><td colspan="1" rowspan="1" colwidth="200"><p><strong><mark>Elements</mark></strong></p></td><td colspan="1" rowspan="1"><p><strong><mark>Descriptions</mark></strong></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;head&gt;</code></p></td><td colspan="1" rowspan="1"><p>Whatever page-related information is required is present in the <code>&lt;head&gt;</code><br>it can be script, external CSS, or external resources.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;body&gt;</code></p></td><td colspan="1" rowspan="1"><p>Whatever content is rendered on the web page it's in <code>&lt;body&gt;</code> tag.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;h1-h6&gt;</code></p></td><td colspan="1" rowspan="1"><p>We have 6 types of headlines in HTML, all of the headline elements are block-level elements.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;a href=""&gt;</code></p></td><td colspan="1" rowspan="1"><p>A href is used to create the link, any image for the tag can be wrapped in to give it a link and then use for visual representation.<br><br>Here, we have the option to open <mark>mail</mark> when the user clicks on the link, i.e. by using <code>"mailto:"</code> option to add an email can be provided also along with this you can open a default Email option that the user has already picked.<br><br>You can also add <code>target="_blank"</code> you can also add <code>rel="noopener"</code> to the <code>href</code> tag and then use them accordingly i.e to open them in the new tab and ask the browser to navigate without granting a new browser context access to the document that opened it.<br><br>This is especially useful when opening untrusted links, in order to ensure they cannot tamper with the originating document.<br></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;img&gt;</code></p></td><td colspan="1" rowspan="1"><p>The image tag is an inline element, it contains <code>src</code> attribute its and required attribute in an image tag along with it we also have <code>srcset</code> used to render an image for smaller devices i.e. mobile devices.<br><br>Along with it we also have <code>alt</code> attributes which are also helpful for describing the image for screen reading and another way around it can be an alternative description for an image.<br><br>Along with this we also have an <code>height</code> and <code>width</code> attributes for rendering the images in specific width and height dimensions.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;p&gt;</code></p></td><td colspan="1" rowspan="1"><p>the paragraph is and block-level element, one of the most commonly used tag for adding content on webpage. The <mark>attributes title </mark>can be also added to it.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;dd&gt;</code></p></td><td colspan="1" rowspan="1"><p>Provides the description, definition or value of proceeding terms.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;div&gt;</code></p></td><td colspan="1" rowspan="1"><p>It is a generic container for content flow, it has not to effect on elements unless CSS is applied to it. It is a pure container for any element and block-level element. It's recommended to use when no semantic element is available to use.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;dl&gt;</code></p></td><td colspan="1" rowspan="1"><p>Description list element. The element encloses a list of groups of terms and descriptions, it is commonly used for displaying key-value pairs.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p><code>&lt;blockquote&gt;</code></p></td><td colspan="1" rowspan="1"><p>Describes the section that has been quoted from another source.</p></td></tr><tr><td colspan="1" rowspan="1" colwidth="200"><p></p></td><td colspan="1" rowspan="1"><p></p></td></tr></tbody></table>

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <figure>
      <blockquote cite="http://www.google.com"
                  title="blockquotes">This is demo for "blockquote"
      </blockquote>
    </figure>

    <!-- Headline from h1-h6 -->
    <h1>Headline Demo 1</h1>
    .
    .
    .
    .
    <h6>Headline Demo 6</h6>

    <!-- Descriptive List  -->
    <dl>
      <dt>Descriptive List</dt>
      <dd>Descrition</dd>
    </dl>

    <!-- Paragreph Tags -->
    <p title="Paragraph tag 1">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      expedita, culpa placeat, voluptates quod beatae vel incidunt, 
      quis nobis debitis omnis harum reprehenderit maxime porro unde 
      numquam.
    </p>

    <p title="Paragraph tag 2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.                   
      repudiandae non culpa vitae optio minus sit eos itaque quasi?
    </p>

    <!-- Image Tag -->
<img src="https://www.test.com" srcset="https://www.test.com/2/"        alt="Test Flower" size="(max-width: 800px) 200px">

    <!-- Hyper Link -->
    <a href="http://test">Data</a>
    <a href="mailto:test@gmail">email</a>
    <a href="tel:+91 256527537537">Phone</a>
  </body>
</html>
```

## Lorem

[Lorem](https://www.lipsum.com/) is demo text which is been used to add when you want to add test content for your website in the development mode.

```typescript
//Alternavtive to add specific words for an lorem text is 

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
```

You can add this text at any point in time to respective tags as and when required.

## How can you create a basic WebPage?

1. You can follow the below steps to create the basic webpage.
    
2. In case you are developing this page on your local machine then code editors like [VS code](https://code.visualstudio.com/), [Sublime](https://www.sublimetext.com/) etc. are easily available online you can refer to the link to download it and install it on your machine.
    
3. Also, create a folder on your desktop or any drive you want to and add the file name index.html to it.
    
4. This is a simple HTML page where you can write code for any website which you want to try out for.
    
5. To fill the demo content you can use the lorem Ipsum text for demo purposes.
    
6. As you will have to load this page in the browser for testing purposes, you can install the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension from [Ritwik Dey](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
    
7. This extension i.e. <mark>live serve</mark>r will help you to load the webpage in the browser.
    

## Image tag in Detail

We have and `<img>` where we have several attributes to play with some of which are listed in the table and their example as we demonstrated in the code snippet has `src`, `srcset` , `width`, `height`, `size` etc.