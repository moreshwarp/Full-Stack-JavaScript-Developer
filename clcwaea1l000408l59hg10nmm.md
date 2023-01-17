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
        
    * This will clear all inputs added by the user and the user 👤 can refill the form.
        
5. `<input type="search">` 🔎
    
    * It will render a field where the user can search the queries.
        
    * This can be styled differently, also all the other additional attributes can be added to its value.
        
    * `pattern`, `maxlength`, `placeholder`, `spellcheck` .
        
    * The main difference between `input-type` `text` and 🔎 `Search` is how `browsers` handle them.
        
    * A `role` attribute of value `Search` on the `<form>` the element will cause screen readers to announce that a form is a search form.
        
6. `<input type="submit">`
    
    * This will render a `button` and on `Click` of this button 🔳 the event will be triggered.
        
    * all other attributes like `value`, `name`, 🆔 `id`.
        
    * `formaction` indicated the `URL` where the data is submitted. It takes precedence over the `action` attribute on the form element.
        
7. `<input type="tel">`📞
    
    * It will render the field where the user can enter or edit the 🔢 telephone number.
        
    * Unlike the `email` 📧 and `url` , the input value is not automatically validated before the form is submitted.
        
8. `<input type="text">`
    
    * Will render the text box and this will help if you want to enter the data in the form of `text` i.e. oneliner.
        
    * Additional attributes can be enabled `name`, `maxlength`, `placeholder` , `autocorrect` .
        
    * Used whenever the single line inputs are required, no automatic validation is required.
        
9. `<input type="time">`
    
    * It will give you the option to **add** or **edit** the `Hours` , `Minute's` and optionally seconds.
        
10. `<input type="url">`
    
    * It allows you to enter or edit the `URL` .
        
    * It also gives you an attribute option to add i.e. `size` , `placeholder` , `maxlength`, `minlength` , `pattern`.
        
    * There are 2 content-level validation available one is at `input` level, which ensures the contents meet the requirements to be a valid `URL` .
        
11. `<input type="week">`
    
    * It creates an input field that allows the addition of an entry of a year.
        
    * You have the option to add the weeks and year via. `Value` .
        
    * You can also use the `min`, `max` value for variation.
        

### `Code For Reference`

```xml
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Form in HTML</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <form action="" method="get" novalidate="true">
      <div class="form-name">
        <label>First Name:</label>
        <input type="text" placeholder="Moreshwar" name="fname" required />
      </div>
      <div class="form_email">
        <label>Email:</label>
        <input
          type="email"
          placeholder="test@gmail.com"
          name="email"
          required
        />
      </div>
      <div class="form-password">
        <label>Password:</label>
        <input
          type="password"
          placeholder="*********"
          name="form_pwd"
          required
        />
      </div>
      <div>
        <input type="date" required />
      </div>

      <div>
        <label>Gender</label>
        <input type="radio" value="male" id="male" name="gender" />
        <label for="male">Male</label>
        <input type="radio" value="female" id="female" name="gender" />
        <label for="female">Female</label>
      </div>

      <!-- Checkbox-->
      <code>
        <input type="checkbox" value="html" id="html" checked />
        <label for="html">HTML</label>
        <input type="checkbox" value="css" id="css" checked />
        <label for="css">CSS</label>
        <input type="checkbox" value="taiwind" id="taiwind" />
        <label for="taiwind">Tailwind</label>
        <input type="checkbox" value="javascript" id="javascript" checked />
        <label for="javascript">javascript</label>
      </code>

      <!-- Button -->
      <div><input type="button" value="iNeuron" onclick="" disabled /></div>
      <div>
        <input type="button" value="AccessKey" onclick="" accesskey="s" />
      </div>
      <div>
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </div>

      <!-- Color -->
      <div>
        <input type="color" id="color" value="#e66465" />
        <label for="color">Color</label>
      </div>

      <!-- Date -->
      <div>
        <input
          type="date"
          id="date"
          min="2023-01-01"
          max="2023-01-31"
          step="2"
          checked
          required
        />
        <label for="date">Date Element</label>
      </div>

      <!-- Datetime Local -->
      <div>
        <input
          type="datetime-local"
          id="local"
          value="2023-01-01"
          min="2023-01-01T00:00"
          max="2023-01-31T00:00"
          step="5"
          required
        />
        <label for="local">Date Time Local</label>
      </div>

      <!-- Input Type Email in HTML -->
      <style>
        [type="email"]:valid {
          background-color: #ade8ad;
        }

        [type="email"]:invalid {
          background-color: #e7d6d6;
        }
      </style>
      <div>
        <label for="email_id">
          Email Id:
          <input
            title="Enter you Email Id"
            type="email"
            id="email_id"
            name="email_id"
            maxlength="30"
            size="30"
            placeholder="test@gmail.com"
            multiple
            required
          />
        </label>
      </div>
      <!-- Input Type File in HTML -->
      <div>
        <label>
          Upload your file
          <input
            type="file"
            id="fileId"
            name="fileId"
            title="Upload File here "
            accept="image/*,.doc,.xml"
            size="2"
            capture
          />
        </label>
      </div>
      <div>
        <label>
          Upload your file
          <input
            type="file"
            id="fileId"
            name="fileId"
            title="Upload File here "
            accept="image/*,.doc,.pdf,.xml"
            size="2"
            multiple
            capture="user"
          />
        </label>
      </div>
      <div>
        <label>
          Upload your file
          <input
            type="file"
            id="fileId"
            name="fileId"
            title="Upload File here "
            accept="image/*,.doc,.pdf,.xml"
            size="2"
            multiple
            capture="user"
          />
        </label>
      </div>
      <!-- (Input Type Hidden) -->
      <div>
        <label>
          Hidden field:
          <input type="hidden" name="hidden_field" id="hidden_field" />
        </label>
      </div>

      <!-- Input type Image -->
      <div>
        <label for="image-field">
          Image
          <input
            type="image"
            name="image-field"
            id="image-field"
            src="/HTML/images/mikhail-fesenko-KniBt27bEsc-unsplash.jpg"
            alt="Input Image"
            width="200"
            height="100"
            formenctype="text/plain"
            formmethod="get"
            formtarget="_self"
          />
        </label>
      </div>

      <!-- Input Type Month -->
      <div>
        <label>
          Month
          <input
            type="month"
            name="month"
            id="month"
            min="2023-01"
            max="2023-12"
            value="2023-01"
            step="2"
            required
          />
        </label>
      </div>

      <!-- Input Type Numbers -->
      <div>
        <label id="number">
          Numbers
          <input
            type="number"
            name="number"
            id="number"
            value="10"
            step="5"
            min="10"
            max="100"
            placeholder="Please enter numeric value"
            required
          />
        </label>
      </div>

      <!-- Input Type Password -->
      <div>
        <label for="password">
          Passwords
          <input
            type="password"
            name="password"
            id="password"
            pattern=""
            autocomplete="new-password"
            placeholder="Please Enter your Password"
            required
          />
        </label>
      </div>

      <!-- Input Type Radio -->
      <div>
        <input type="radio" id="html1" name="radio" value="html" />
        <label for="html1"> HTML </label>
        <input type="radio" id="css1" name="radio" value="css" />
        <label for="css1"> CSS </label>
        <input type="radio" id="js1" name="radio" value="js" checked />
        <label for="js1"> JavaScript </label>
      </div>

      <!-- Input Type Range -->
      <div>
        <label for="range">Range</label>
        <input
          type="range"
          id="range"
          name="range"
          value="range"
          min="10"
          max="75"
          step="5"
          required
        />
      </div>

      <!-- Input Type Reset -->
      <div>
        <label for="reset">Reset</label>
        <input type="reset" id="range" name="reset" value="Reset" />
      </div>

      <!-- Input Type Search -->
      <form role="search">
        <div>
          <label for="search">Search</label>
          <input
            type="serch"
            id="search"
            name="search"
            spellcheck="true"
            placeholder="Search your query"
            required
          />
        </div>
      </form>

      <!-- Input Type tel -->
      <div>
        <label for="tel">
          tel
          <input
            type="tel"
            name="tel"
            maxlength="10"
            placeholder="tel. phone #"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="tel"
            required
          />
        </label>
      </div>

      <!-- Input Type text -->
      <div>
        <label for="text">
          Text
          <input
            type="text"
            name="text"
            minlength="10"
            maxlength="100"
            size="100"
            spellcheck="true"
            placeholder="Enter Text"
            id="text"
            required
          />
        </label>
      </div>

      <!-- Input Type time -->
      <div>
        <label for="time">
          Time
          <input type="time" name="time" id="time" required />
        </label>
      </div>

      <!-- Input Type CheckBox -->
      <div>
        <label for="url">
          URL
          <input
            type="url"
            name="url"
            id="url"
            pattern="https://.*"
            placeholder="https://google.com"
            spellcheck="true"
            size="30"
            required
          />
        </label>
      </div>

      <!-- Input Type Week -->
      <div>
        <label for="week">
          Week
          <input
            type="week"
            name="week"
            id="week"
            min="2023-W02"
            max="2023-W04"
            value="2023-W02"
            required
          />
        </label>
      </div>
    </form>
  </body>
</html>
```

Thanks!!! for reading