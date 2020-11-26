# JS Functional

Functional programming ( aka FP) is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**. Functional programming is **declarative** rather than **imperative**, and application state flows through **pure functions**. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code.

> Is a programming paradigm, a style code programming based on functions, where avoiding mutable data, shared state and side effects.

There are a lot of ideas in the innocent looking definition above which all need to be understood before you can begin to grasp the meaning of functional programming:

- **Pure functions:**
  in very simple terms. Given the same inputs, always returns the same output, and has no side-effects.

- **Function composition:**
  the process of combining two or more functions in order to produce a new function or perform some computation. For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript.

- **Avoid shared state:**
  is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.

- **Avoid mutating state:**
  An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.

- **Avoid side effects:**
  A side effect is any application state change that is observable outside the called function other than its return value. Side effects include:

  - Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
  - Logging to the console
  - Writing to the screen
  - Writing to a file
  - Writing to the network
  - Triggering any external process
  - Calling any other functions with side-effects

> In JavaScript, it’s important not to confuse const, with immutability. const creates a variable name binding which can’t be reassigned after creation. const does not create immutable objects. You can’t change the object that the binding refers to, but you can still change the properties of the object, which means that bindings created with const are mutable, not immutable.
