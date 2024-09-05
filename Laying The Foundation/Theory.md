Question: What is JSX ?
Answer: JSX is HTML-like or XML-like syntax. JSX stands for JavaScript
XML. It's a syntax extension for JavaScript.
It is not a part of React. React apps can be built even
without JSX but the code will become very hard to read.
It is not HTML inside JavaScript.
JavaScript engine cannot understand JSX as it only
understands ECMAScript.

Question: Superpowers of JSX ?
Answer: 1) Sanitizes the data
If someone gets access to your JS code and sends some malicious
data which will then get displayed on the screen, that attack is
called cross-site scripting.
It can read cookies, local storage, session storage, get
cookies, get info about your device, and read data. JSx takes
care of your data.
If some API passes some malicious data JSX will escape it. It
prevents cross-site scripting and sanitizes the data before
rendering 2) Makes code readable
JSX makes it easier to write code as we are no longer creating
elements using React.createElement() 3) Makes code simple and elegant 4) Show more useful errors and warnings 5) JSX prevents code injections (attacks)

Question: Roleof type attribute in script tag? What options can I use there?
Answer: The type attribute in the <script> tag specifies the MIME type of the script. Historically, it was used to define the scripting language of the script included in the HTML document. However, in modern HTML, this attribute is often optional, and the default value is "text/javascript".

Here’s a breakdown of how the type attribute is used and what options you might encounter:

Common Values for type Attribute
JavaScript:

"text/javascript": This is the default value and specifies that the script is written in JavaScript. Most modern browsers assume this value even if you don’t explicitly include it.
"application/javascript": This is another valid MIME type for JavaScript and is functionally equivalent to "text/javascript".
Other Scripting Languages:

TypeScript: For TypeScript files, you might see "application/typescript", though TypeScript files are usually processed at build time rather than in the browser.
JavaScript Modules: For JavaScript modules (ES6 modules), you use "module" with the type attribute. This tells the browser that the script should be treated as a module.
html
Copy code

<script type="module" src="script.js"></script>

Other MIME Types: You might encounter other MIME types for different kinds of scripts, though these are less common. For example, "application/json" for JSON data in a <script> tag, but this isn’t for execution.
Examples
Basic JavaScript:

html
Copy code

<script type="text/javascript">
  console.log("Hello, World!");
</script>

JavaScript Module:

html
Copy code

<script type="module">
  import { myFunction } from './module.js';
  myFunction();
</script>

TypeScript (pre-processed):

html
Copy code

<script type="application/typescript">
  let message: string = "Hello, TypeScript!";
  console.log(message);
</script>

Modern Best Practices
In practice, you can often omit the type attribute for JavaScript, as the default is assumed. However, including "module" is necessary for JavaScript modules. Other MIME types like "text/coffeescript" or "text/babel" might be used in specific contexts or build tools but are not widely supported directly in browsers.

Understanding the type attribute helps in ensuring that the correct MIME type is associated with your scripts, but its importance has diminished with the standardization of JavaScript handling in modern browsers.

Question: {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX
Answer: {TitleComponent} is used for executing any JavaScript code inside any JSX code or to put any react component inside any other React Functional Component.
To render a functional component we call them ‘<Heading1 />’.
This is the syntax that Babel understands.
You can also call them using these ways,
‘<Title></Title>’
or
‘{Title()}'
