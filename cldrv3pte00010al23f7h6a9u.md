# 🍪Cookie 🍪

# Introduction

A **<mark>cookie</mark>** is a small string of data that is been stored in the browser, one can access the cookie using a `document.cookie`

`Cookie's` are set by a browser using the set-cookie `HTTP-Header`. Whenever the request is now been sent to a server over the same domain, the cookie gets added to the request browser adds it using `HTPP-Loader`.

This is how the server identifies which client/user has requested to serve a request.

We can access cookies via. `document.cookie` , also to set a new cookie we have the following way.

```javascript
document.cookie = "🗝=value";
```

This <mark>🗝= value</mark> pair is nothing but the **<mark>string</mark>**. The `document.cookie` also, this is one of the ways to store user data.

However, while adding the `cookie` there is some mishap happening when or if there are some special characters used as part of `key` for example please refer the below code snippet.

**<mark>encodeURIComponent("Key") and decodeURIComponent("🗝")</mark>**

```javascript
console.log(document.cookie);

document.cookie = "name=Moreshwar";
document.cookie = "name1=Moreshwar1";
document.cookie = "name2=Moreshwar2";
document.cookie = "name3=Moreshwar3";
document.cookie = "name4=Moreshwar4";

console.log(document.cookie);
// document.cookie = `{key}` + "=" + `{value}`;
// This won't set Key Value pair properly in case of special character's

// Encode URI Component That Helps to keep the valid formating. It is used like this
let key = prompt("Enter the Name");
let value = prompt("Enter Value");
document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value);

console.log(document.cookie);
console.log(decodeURIComponent("asdas%24%24%24%24%24")); 
console.log(decodeURIComponent("asdas%24%24%24"));
```

### **<mark>Cookie Options</mark>**

We have the option to set a path where the cookie shall be **<mark>visible</mark>** also we can set an **expiration time frame** for the same using **<mark>expires/max-age</mark>**.

**<mark>By default, if a cookie doesn’t have one of these options, it disappears when the browser is closed. Such cookies are called session cookies</mark>**

Here is an example of the same.

```javascript
// Cookie Options
document.cookie = "user=Moreshwar; path=/; expires=Tue, 6 Feb 2023 02:06:00 GMT";
document.cookie = "user10=Moreshwar; path=/; max-age=100";
console.log(document.cookie);
```

### **Points to Remember**

The `name=value` pair, after `encodeURIComponent`, **<mark>should not exceed 4KB</mark>**. So we can’t store anything huge in a cookie.

The total number of cookies per domain is limited to **<mark>around 20+</mark>**, the exact limit depends on the browser.

### path

* `path=/mypath`
    
* The URL path prefix must be absolute. It makes the cookie accessible for pages under that path. By default, it’s the current path.
    
* If a cookie is set with `path=/admin`, it’s visible on pages `/admin` and `/admin/something`, but not at `/home` or `/admin-page`.
    
* Usually, we should set `path` to the root: `path=/` to make the cookie accessible from all website pages.
    

### Domain

* `domain=site.com`
    
* A domain defines where the **<mark>cookie</mark>** is **<mark>accessible</mark>**. In practice though, there are limitations. We can’t set any domain.
    
* **There’s no way to let a cookie be accessible from another 2nd-level domain, so** `other.com` will never receive a cookie set at `site.com`.
    
* It’s a safety restriction, to allow us to store sensitive data in cookies that should be available only on one site.
    
* By default, a cookie is accessible only at the domain that set it.