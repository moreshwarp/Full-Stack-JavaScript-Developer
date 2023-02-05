# Local Storage

# Introduction to Local Storage

**LocalStorage** is used to store the data in the browser for a particular domain. The web storage objects are not sent to the server.

**<mark>LocalStorage is used to store the data for a particular domain.</mark>**

Basically i.e **<mark>local storage</mark>** is a web storage object which is not sent to the server with each request. Whereas the cookie is been set to the server with each request.

An where the developer doesn't want to send the data to the server with every request.

Suppose you want to **save** the note from the **client** and you don't want that note to get stored in **cookie** 🍪 the reason you don't want to store that note in cookie 🍪 is that that note then is sent to the server for **every request call**.

Even if you refresh the page or restart the browser. The data stored will be saved and will not be lost.

The data is been stored in form of **<mark>🗝 </mark>** & **<mark> Value</mark>** pair.

**<mark>setItem("Key", "Value")</mark>**

Methods in LocalStorage `setItem("🗝", value)` this method will set the add the data to `LocalStorage`.

**<mark>getItem("</mark>**<mark>🗝</mark>**<mark>")</mark>**

The method will help to retrieve the value with the help of **key**🗝.

**<mark>removeItem("🗝")</mark>**

The method will remove the value which has the mentioned key and for the **key** which does not exist the output should be undefined.

**<mark>clear()</mark>**

The method will delete everything from the local storage.

**<mark>key(index)</mark>**

The key can be retrieved for the specified position index.

***<mark>Code Reference</mark>***

```javascript
let key = prompt("Enter Key");
let value = prompt("Enter value");

localStorage.setItem(key, value);
console.log(` the Key is ${key} and its value is ${localStorage.getItem(key)}`);

key = prompt("Enter Key for which you want to remove the item");
localStorage.getItem(key);
console.log(
  `Item with ${key} Name and it has value ${localStorage.getItem(key)}`
);
localStorage.removeItem(key);

// localStorage.clear();
// To calculate the length of local storage
console.log(localStorage.length);
console.log(localStorage.key(2));
console.log(localStorage.getItem(2));

let aObject = `{
  fname: "Moreshwar",
  lname: "Pidadi",
  empId: 19274,
  nickName: "More",
}`;

const user = {
  firstName: "Moreshwar",
  age: 26,
};

// [object, object] here the object is been passed into the string same for Ex: String(user) [object, object]
localStorage.setItem("user", user); 

// here we will use JASON.Stringify now the object is converted into JASON Valid String and stored to local Storage.

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));

localStorage.setItem("object", JSON.stringify(aObject));
console.log(localStorage.getItem("object"));
```