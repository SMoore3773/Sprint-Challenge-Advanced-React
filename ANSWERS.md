- [x] Why would you use class component over function components (removing hooks from the question)?

Class components allow us access the React Lifecycle. In doing this it allows us to control how our components work within our application. It allows us to use functionality that React has built into their base component by extending that component with the components that we create.

- [x] Name three lifecycle methods and their purposes.

Constructor -- The constructor method creates the react component and instantiates state on the component. Within the component, the constructor is where we pass props into our new extended class. This is also where we bind our event handlers.

ComponentDidMount — This method is called the first time the render method is called. This method allows us to call our setState functions after the state has been instantiated in our constructor; and the component has been laid out in the render. ComponentDidMount allows us to build out the skeleton of a page without having to wait for a time consuming process, like an api request, to finish before rendering the entire page.

Render -- Render tells react to return some part of the DOM, then the react virtual DOM will mount these pieces. Render should contain the function that returns the component that will get rendered to the screen. Render can be called multiple times during the react lifecycle. The first time being during the mounting phase, but also each time a component updates.

- [x] What is the purpose of a custom hook?

A custom hook is used when we may only need a portion of a larger hook, or if we need more functionality out of an existing hook, or even if we need our own functionality that no current hook offers. If we found ourselves repeating a call over and over again, even if it was to an existing hook, we can make a hook that contains a function to cover all of the coding needs of the code that we were repeating. A custom hook is at it’s core a function, so any function that could be used within our code, especially one that we will use over and over again, can be turned into a hook.

- [x] Why is it important to test our apps?

We need to test our apps to not only ensure functionality on app delivery, making sure that the code that we have written works, but also so that anyone altering our code at a later date does not break the base code, and if they do they will get an error describing what broke and where to find and fix the problem. Testing and making testable code can help keep the app functioning during refactoring and allows us confidence that the code will work now, as well as later.