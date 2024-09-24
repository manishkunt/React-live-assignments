Question: Is JSXmandatory for React?
Answer: No, JSX is not mandatory for React, but it is commonly used because it makes the code easier
to write and understand. Without JSX, you would need to use React.createElement(), which can be less intuitive and more verbose.

Question: Is ES6mandatory for React?
Answer: ES6 is not mandatory for React, but it enhances the development experience. Features like
arrow functions, destructuring, and modules simplify React code. React can work with older JavaScript versions, but ES6 is recommended for cleaner, more efficient code.

Question: {TitleComponent} vs {<TitleComponent/>} vs
{<TitleComponent></TitleComponent>} in JSX  
Answer: {TitleComponent}:
This is a reference to the component itself, not rendering it. It is often used when passing the component as a prop or when conditionally rendering.

           function App() {
           const TitleComponent = () => <h1>Hello World</h1>;

           // Using the component as a reference
           const renderTitle = true ? TitleComponent : null;

           return <>{renderTitle && <TitleComponent />}</>;
           }

           {<TitleComponent />}:
           This is the most common way of rendering a component using a self-closing tag. It's concise when there are no children or additional content inside the component.

           function App() {
           const TitleComponent = () => <h1>Hello World</h1>;

           return (
           <div>
           {/* Renders the TitleComponent */}
           <TitleComponent />
           </div>
            );
           }

           {<TitleComponent></TitleComponent>}:
           This is the explicit opening and closing tag format, used if you want to include children inside the component or when not using a self-closing tag.

           function App() {
           const TitleComponent = ({ children }) => <h1>{children}</h1>;

           return (
           <div>
           {/* Rendering the TitleComponent with children */}
           <TitleComponent>Welcome to the App!</TitleComponent>
           </div>
           );
           }

Question: HowcanIwrite comments in JSX?
Answer: To write comments in JSX, use curly braces with JavaScript-style block comments inside.
{/_ This is a JSX comment _/}

Question: What is <React.Fragment></React.Fragment> and <></> ?
Answer: <React.Fragment></React.Fragment>
This is used to group multiple children elements without adding extra nodes to the DOM.
function App() {
return (
<React.Fragment>

<h1>Hello</h1>
<p>This is a fragment example.</p>
</React.Fragment>
);
}

           <> </>
           This is the shorthand syntax for React.Fragment, making it more concise and readable.
           function App() {
           return (
           <>
           <h1>Hello</h1>
           <p>This is a shorthand fragment example.</p>
           </>
           );
           }
           Both serve the same purpose: grouping elements without extra DOM nodes.
           The first syntax can accept keys for lists, while the shorthand cannot.

Question: What is Virtual DOM?
Answer: The Virtual DOM is a lightweight representation of the actual DOM in memory. React uses it to improve
performance by minimizing direct manipulations of the real DOM. Changes are first made to the Virtual DOM, then reconciled with the real DOM, optimizing rendering.

Question: What is Reconciliation in React?
Answer: Reconciliation in React is the process of updating the DOM efficiently. When changes occur, React
compares the Virtual DOM with the previous version, identifies differences, and updates only the changed parts in the actual DOM, optimizing performance.

Question: What is React Fiber?
Answer: React Fiber is the reconciliation engine for React, introduced in version 16. It allows for incremental
rendering, improving responsiveness and performance. Fiber enables better prioritization of updates, supports asynchronous rendering, and handles complex UI updates more efficiently compared to the previous reconciliation algorithm.

Question: Why we need keys in React? When do we need keys in React?
Answer: Keys in React help identify elements in a list, allowing React to optimize rendering by tracking
changes, additions, and removals. They are needed when rendering lists of components, ensuring the correct elements are updated without unnecessary re-renders. Each key should be unique among siblings.

Question: Can we use index as keys in React?
Answer: Using indices as keys in React is generally discouraged. While it works for simple lists, it can lead to
issues with component state and performance during reordering or filtering. Unique and stable keys are preferred for optimal reconciliation and rendering.

Question: What is props in React? Ways to use props ?
Answer: Props, or properties, are a mechanism in React for passing data and event handlers from a parent
component to child components. They enable component reusability and customization.
Ways to Use Props:
Passing Data: Send variables or objects to child components.
Event Handling: Pass functions as props for child components to trigger actions.
Conditional Rendering: Control rendering based on prop values.

Question: What is aConfig Driven UI ?
Answer: A Config Driven UI is an approach where the user interface is defined by configuration files or objects
rather than hard-coded components. This allows for greater flexibility, enabling dynamic rendering of components based on external data or settings, facilitating easier updates and customization without altering code.
