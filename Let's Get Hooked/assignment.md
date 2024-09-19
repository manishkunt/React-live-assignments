Question: What is the difference between Named Export, Default export and \* as export?
Answer: Here's a concise breakdown:

Named Export: Allows multiple exports from a module. Import using curly braces. Example:

export const foo = () => {};
import { foo } from './module';
Default Export: Allows one export per module. Import without curly braces. Example:

const bar = () => {};
export default bar;
import bar from './module';

- as Export: Imports all named exports as a single object. Example:

export const x = 1;
export const y = 2;
import \* as utils from './module';

Each serves different use cases in modular JavaScript development.

Question: What is the importance of config.js file ?
Answer: The config.js file is important for several reasons:

Centralized Configuration: It centralizes application settings, making it easy to manage and modify parameters like API endpoints, feature flags, and environment variables.

Environment Management: It facilitates different configurations for development, testing, and production environments.

Maintainability: Changes to configuration can be made in one place, improving code maintainability and reducing errors.

Separation of Concerns: It separates configuration data from application logic, enhancing code clarity and organization.

Question: What are React Hooks?
Answer: React Hooks are functions that allow functional components to manage state and side effects, enabling a more functional programming style. Introduced in React 16.8, they include:

useState: Manages local state.
useEffect: Handles side effects like data fetching.
useContext: Consumes context values.
Custom Hooks: Allows for reusable stateful logic.
Hooks simplify component logic and promote code reuse.

Question: Why do we need a useState Hook?
Answer: The useState hook is essential for managing local state in functional components. It allows you to:

Track Component State: Store and update state variables easily.
Re-render on State Changes: Automatically re-renders the component when state updates.
Simplify State Management: Provides a clean and intuitive API compared to class-based state management.
Overall, it enhances functional component capabilities, making state management straightforward.
