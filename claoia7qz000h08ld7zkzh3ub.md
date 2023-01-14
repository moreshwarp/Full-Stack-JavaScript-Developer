# Server, Web Server & HTML

## What is a Server?

> A program that provides the service to the other computers. In this case, the other computers can be also called clients. And the term **servers** is being referred to where the request is being received for the web file and sent back to the client.

* As they are constantly providing the service they can't be shut down else there would be service interruption.
    
* Below are some examples for servers
    
    1. Application server
        
    2. Blade server
        
    3. Cloud server
        
    4. Database server
        
    5. Dedicated server
        
    6. Domain name service
        
    7. File server
        
    8. Mail server
        
    9. Print server
        
    10. Proxy server
        
    11. Standalone server
        
    12. Web server
        

## Web Server

> The term web server refers to both hardware or software or both working together.

There are 2 types of web servers

1. Static web server (Server of the static sites) and 2. Dynamic web server (Server the dynamic sites).
    

All the communication takes place with the help of protocols which are nothing but a set of instructions.

## HTML Tags

There is a total of 6 levels of heading from H1 to H6.

```typescript
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
<h5>Heading level 5</h5>
<h6>Heading level 6</h6>
```

However, because of accessibility concerns, we should not skip the sequencing of these tags.

## Not Recommended

```typescript
<h1>Heading level 1</h1>
<h3>Heading level 3</h3>
<h4>Heading level 4</h4>
```

## Recommended

```typescript
<h1>Heading level 1</h1>
<h2>Heading level 2</h2>
<h3>Heading level 3</h3>
```

## The Anchor element

Syntax: `<a href="destination_url">label</a>`

* This element or tag creates a hyperlink to web pages, files, email addresses, locations on the same page, or anything else a URL can address.
    
* This element has attributes, download, href, hreflang, ping, referrer-policy, rel, target, and type.
    

> To link the phone number `<a href="tel:+91 125466555">Call Us</a>"` o/p: \[Call Us\](tel:+91 125466555)

> To link email `<a href="mailto:test@gmail.com">Email</a>`

o/p: [Email](mailto:test@gmail.com)

* We can also enclose the `<a>` tag within other tags/elements like `<p>, <strong>` etc. and some tags within it as well.
    
* And we use the **target** attribute to open the links in a new tab.
    

Ex:

`<a target="_blank" href="https://www.test.com">Test</a>` This will open the link in the new tab.