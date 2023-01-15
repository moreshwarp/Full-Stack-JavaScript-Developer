# Input Elements in HTML

`Form` in HTML are the interactive documents, which will help to collect the data from the user. It also has various attributes like `action`, `autocomplete`, `method` (`get`,`post`, `dialog`).

`action` : Here there will be the URL where the form data will be `submitted`/`collected`.

`autocomplete`: Here the value is `on`/`off`. It will allow the browser automatically complete the entries.

`method`: `HTTP` method to `submit` the form with. The only allowed methods/values are

* `post` : The <mark>Post</mark> method; form data is been sent as a request body.
    
* `get` (default): The <mark>GET</mark> method from data appended to the action URL with a `?` the separator <mark>uses </mark> this method when the form has no side effects.
    
* `dialog` : When the form method has `dialog` , then closes the dialog and throws a submit event on submission without submitting data or clearing the form.
    
* `novalidate` : Indicates that the form should not be `validated`, <mark>its attribute is not set</mark> and because of this by default the form is <mark>validated</mark>. However, this can be overridden by calling and method and applying a validation using JS\*\*.\*\*
    

## <mark>Input Type Elements</mark>

1. `<input type="button">` 🔳
    
    * The type `button` is rendered as a simple button, where we can program it to give a call to a specific function.
        
    * This helps us to add custom functionality for any specific event.
        
    * You can also `enable` or `disable` the button by creating a certain event.
        
    * You can also add `accesskey` attribute to a button to trigger that event when those buttons are clicked.
        
2. `<input type="checkbox">` ☑
    
    * The `boxes` are been rendered where we can tick ✅ them (i.e. ☑ check), in some cases, it may have rounded corners, and it allows you to select the single value which you have checked.
        
    * The ☑ `checkbox` an option can be given when you have multiple options to select from.
        
    * When you click on label 🔖 the input tag should be selected or highlighted
        
        in that case, you should have `id` and `for` attribute and this should have the same value.
        
    * When you use the default check mode you can add the <mark>attribute </mark> `checked` in an `input` tag.
        
3. `<input type="color">`
    
    * Allow user 👤 to ⛏ pick the color the format of color is in hexadecimal.
        
    * You can add value to that color while you select from it.
        
    * In that case, the label is clicked and the color-selecting option is available.
        
4. `<input type="date">`
    
    * Input `type="date"` allows user👤to add the date.
        
    * These values include the `date`, `month` and `year`.
        
    * You can also add `min` , `max` , `step` attributes to it along with its value.
        
    * You can restrict the user to select the `date` by specifying the value (`min` and `max`).
        
    * `step` will help you to increase the `fold` of a date🔢.
        
5. `<input type="datetime-local">`
    
    * You can select the `time` or add `time` along with the <mark>date </mark> when you select the `date` and it has an input type as `date`.
        
    * In terms of `time` it includes `hours`, `minutes`, and `seconds`.
        
6. `<input type="email">`📧
    
    * Let the user enter edit or add the `email` 📧 `address`, where you can also specify the size.
        
    * You can also ✅ check if the given email 📧 address is `valid` or `invalid` using the `pseudo-classes` by applying the suitable `CSS` for the same.
        
    * These `validations` do not necessarily check if the mail id provided is valid or not rather it checks if the format of the email is valid or not.
        
    * Along with this, there are some additional attributes as well ex. `maxlength` and `minlength` , here you can fix the `length` of the given mail id✉ 🆔.
        
    * `Multiple` here you can add multiple mail ids to the input field at a time.
        
    * `pattern` here you can specify the `RegExp` for the `pattern`, you are going to add in the `input` field.
        
    * `size` here its default value is `20`.
        
7. `<input type="file">` 📂
    
    * `Input` type 📂 `file` this type is used to upload the file included in the form field, it may be a document 📄, images(`JPEG`, `PNG`) etc.
        
    * It also has various attributes like `accept` this can have a value `image`/`doc` .
        
    * It also has an attribute `capture` optionally a few files should be captured,
        
        and the specific device should be captured, its value is `user` 👤.
        
    * `multiple` allows you to upload multiple `documents`/`images`.
        
8. `<input type="hidden">`
    
    * This holds the string that contains the `hidden` data when the user submits the data to the server.
        
    * Users can directly edit the value of the input fields though you can edit them by inspecting them.
        
    * Attributes for given to the input type `hidden` are `name`, `value`.
        
    * The `hidden inputs` are completely `invisible` on the pages, the `value` stored in the form of `string` .
        
    * The hidden inputs are also stored and submit `security tokens` or `secrets` useful for financial transactions.
        
9. `<input type="image">`
    
    * It creates the graphical `submit` 🔳 `button` i.e. submit button that takes the form of an image rather than text.
        
    * It does not accept the <mark>value</mark> attributes, the path to the image is been displayed by `src` attribute.
        
    * As it has an `src` attributes works here and the attributes like `width` and `height` , `alt` will work as intended.
        
    * Along with this, it also has [`formnovalidate`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image#attr-formnovalidate) , [`formtarget`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image#attr-formtarget) (`_self`, `_blank`*,* `_parent`, `_top`).
        
10. `<input type="month">`
    
    * It creates the input field for selecting the month from the given option, also the `format` for adding the `month` to the `YYYY-MM` .
        
    * There too we can add various other `attributes` `required`, `name`, `id`, `step`, `min`, `max`.
        
11. `<input type="number">` 🔢
    

* It creates a field where the user can provide input in numeric form and all other non-numeric values are not accepted.
    
* All other attributes like `placeholder`, `min`, `max`, `step` etc.
    
* The input value is in the form of `text` you will have to typecast it while fetching the data at the backend.
    

1. `<input type="password">`
    
    * It creates the field for the user 👤, where the user can add the password, it's in form of text also it's not readable.
        
    * The additional attributes like `minlength`, `maxlength` , `pattern` , `size` , `readonly` , `autocomplete` **on** and **off**.
        
2. `<input type="radio">` 📻
    
    * It gives the option to select from where only one option can be selected,
        
        they are highlighted when they are selected.
        
    * Other attributes like name, id, value and <mark>checked</mark> are also applicable in the radio button option.
        
3. `<input type="range">`
    
    * It let the user provides `input` , specifically in the range of it `min` and `max` value.
        
    * Here there are too some additional attributes along with `name`, `id`, `step`.
        
    * It will give you a slider to play around with.
        
4. `<input type="reset">`
    
    * It will `render` the button that will give you the option to clear the data that user 👤 has already entered.
        
    
5. `<input type="search">` 🔎
    
6. `<input type="submit">`
    
7. `<input type="tel">`📞
    
8. `<input type="text">`
    
9. `<input type="time">`
    
10. `<input type="url">`
    
11. `<input type="week">`