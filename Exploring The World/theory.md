What is a Microservice?
A microservice is a small, independent service that focuses on a specific function within a larger application. Each microservice operates separately, communicates via APIs, and can be developed, deployed, and scaled independently without affecting other parts of the system.

What is Monolith architecture?
Monolith architecture is a software design where all components of an application are built as a single, interconnected unit. In this architecture, the user interface, business logic, and database are tightly coupled, making scaling and maintenance more challenging compared to microservices.

What is the difference between Monolith and Microservice?
Monolith architecture has all components tightly integrated into a single system, making it harder to scale and maintain. Microservices break the system into independent, loosely coupled services, allowing easier scaling, flexibility in development, and more manageable maintenance through individual service updates.

Why do we need a useEffect Hook?
The useEffect hook in React is used to handle side effects, such as data fetching, subscriptions, or manually changing the DOM, that occur after a component renders. It ensures that side effects are executed at the right time in the component lifecycle.

What is Optional Chaining?
Optional chaining (?.) is a JavaScript feature that allows safe access to deeply nested object properties. It checks if a property exists before trying to access it, preventing runtime errors like "Cannot read property of undefined" if the value is null or undefined.

    What is Shimmer UI?
    Shimmer UI is a loading effect that mimics the appearance of content that is still loading. It creates placeholder elements that shimmer, giving users the visual feedback that data is being fetched or processed, improving the overall user experience during loading times.

    What is the difference between JS expression and JS statement
    A JavaScript expression evaluates to a value (e.g., 5 + 3 or x * 10). It can be used wherever a value is expected. A JavaScript statement performs an action (e.g., if, for, let). Statements control the flow and execution of code.

     What is Conditional Rendering, explain with a code example
     Conditional rendering in React allows components to render different outputs based on a condition. It works similarly to JavaScript conditions.
     function Greeting({ isLoggedIn }) {
      return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
     }
     Here, Greeting renders different messages based on the isLoggedIn prop value.

     What is CORS?
     CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that allows or restricts resources (like APIs) to be requested from a different domain than the one the page originated from. It ensures secure cross-origin requests by enforcing policies through HTTP headers.

    What is async and await?
    async and await are JavaScript keywords that simplify working with asynchronous code. An async function always returns a promise, and await pauses execution until the promise resolves. This makes it easier to read and write asynchronous code compared to using traditional promise chaining.

    What is the use of `const json = await data.json();` in getRestaurants()
    In getRestaurants(), the line const json = await data.json(); is used to parse the response data from a fetch request as JSON. The await keyword pauses execution until the promise resolves, ensuring that json contains the parsed data for further processing.

    What is JSON ?
    JSON (JavaScript Object Notation) is a lightweight data interchange format that's easy for humans to read and write and easy for machines to parse and generate. It's primarily used to transmit data between a server and a web application as text, representing structured data in key-value pairs.
