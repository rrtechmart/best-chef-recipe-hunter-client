import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-lg font-medium mt-4'>
                Ques-1: Tell us difference between uncontrolled and controlled component. 
            </p>
            <p>
                Ans-1: The main difference between uncontrolled and controlled components lies in how they handle and manage form data. Uncontrolled components rely on the DOM to manage the form input's state, while controlled components maintain their own state and control the form input's value through that state. Controlled components offer more control and validation, while uncontrolled components are often simpler to implement. The choice between the two depends on the specific requirements and complexity of the application or form being built.
            </p> <br /> <br />

            <p className='text-lg font-medium mt-4'>
                Ques-2: How to validate react props using propsTypes? 
            </p>
            <p>
                Ans-2: In React, we can validate the props passed to a component using the propTypes feature. propTypes is a built-in feature that helps us define the expected types of the props and whether they are required or optional. Here's how we can use propTypes to validate React props are as follows-- <br />

                a. Install the prop-types package <br />
                b.Import the prop-types module <br />
                c.Define propTypes for our component <br />
                d. Prop validation in action: When using the component, React will automatically validate the props according to the defined propTypes. If an invalid prop is provided or a required prop is missing, React will log a warning in the console.


            </p> <br /> <br />

            <p className='text-lg font-medium mt-4'>
                Ques-3: Tell us difference between node js and express js. 
            </p>
            <p>
                Ans-3: <span className='text-lg font-medium'>Node.js</span> is a JavaScript runtime that allows you to execute JavaScript code on the server-side, while 
                <span className='text-lg font-medium'>Express.js</span> is a framework built on top of Node.js that provides tools and features for building web applications and APIs. Express.js simplifies the process of handling HTTP requests and responses, routing, and middleware management. It is a popular choice for building web applications with Node.js due to its simplicity, flexibility, and vast community support.
            </p> <br /> <br />

            <p className='text-lg font-medium mt-4'>
                Ques-4: What is a custom hook, and why will you create a custom hook? 
            </p>
            <p>
                Ans-4: A <span className='text-lg font-medium'>custom hook</span>   in React is a JavaScript function that allows us to reuse stateful logic across multiple components. It enables you to extract and share common functionality that involves state management, side effects, or other React features.There are some reasons why we might create a custom hook: <br />

                (a) Reusability: Custom hooks promote code reusability by encapsulating logic that can be shared across different components. <br />

                (b) Abstraction: Custom hooks help abstract away implementation details, making us component code cleaner and easier to read. By moving reusable logic into a custom hook, we can focus on the specific functionality of our component without cluttering it with implementation details. <br />

                (c) Composition: Custom hooks can be composed together, allowing us to combine multiple hooks into a single cohesive unit. This enables us to build complex behavior by combining smaller, reusable hooks, promoting modular and maintainable code. <br />

                Overall, custom hooks empower us to extract and reuse logic in a clean and modular way, promoting code reusability, maintainability, and testability in our React applications.





            </p> <br /> <br />


            
        </div>
    );
};

export default Blog;