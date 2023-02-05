# Session Storage

The **SessionStorage** is used less often than the **LocalStorage** and all the properties and methods are the same as that of **LocalStorage**.

The difference is that while data in `localStorage` doesn't expire, data in `sessionStorage` is cleared when the *<mark>page session</mark>* ends.

When the webpage or document is loaded in the tab in the browser a unique page session gets created and assigned to a particular tab. That page session is valid only for a particular tab.

A page session lasts as long as the tab or the browser is open and survives over page reloads and restores.

Closing a <mark>tab/window</mark> ends the session and clears objects in `sessionStorage`.

**<mark>setItem("Key", "Value")</mark>**

Methods in **SessionStorage** setItem("🗝", value) this method will set the add the data to LocalStorage.

**<mark>getItem("🗝")</mark>**

The method will help to retrieve the value with the help of key🗝.

**<mark>removeItem("🗝")</mark>**

The method will remove the value which has the mentioned key and for the key which does not exist the output should be undefined.

**<mark>clear()</mark>**

The method will delete everything from the session storage.

```javascript
sessionStorage.setItem("nameSession", "testSession");
sessionStorage.setItem("nameSession1", "testSession1");
console.log(sessionStorage.getItem("nameSession"));
console.log(sessionStorage.getItem("nameSession1"));

document.onstorage = (e) => {
  alert("updated");
  console.log(e);
};

console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(2));
console.log(sessionStorage.key(5));

console.log(`Removing the Session Storage with key name ${nameSession1} removed`);

sessionStorage.removeItem("nameSession1");
sessionStorage.clear();
```

### **Storage Event**

Whenever the data is updated in **LocalStorage** and **SessionStorage,** storage events trigger with these properties:

1. **Key** 🗝
    
2. **Old Value** \-&gt; Previous Value
    
3. **new Value** -&gt; New Value
    
4. **URL** \-&gt; Page URL
    
5. **StorageArea** \-&gt; Local or SessionStorage