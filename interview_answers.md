# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

A stateful component is a class component, that uses logic and state, and must have a render() method to return HTML. Can use lifecycle methods- mounting, updating, unmounting.

A functional component is a stateless component, does not use state. Uses useState() and useEffect() to replicate lifecycle methods. Uses JSX to return HTML.

2. When does a componentWillMount function get called? What about a componentWillUpdate?

Well, those 2 methods are deprecated and renamed: componentDidMount and componentDidUpdate.

componentDidMount() is called immidiately after the component is mounted, during the mounting phase.

componentDidUpdate() is called immediately after any changes happen, during the updating phase.

3. Define stateful logic.

Logic can changes state based on a user event or any non-visual behavior behind the scenes.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange, Act, Assert.

Arrange: render component/props/element to virtual dom, setting up the rest of the test logic.

Act: use methods to query/get/find DOM element, using regex syntax.

Assert: assert that the element behaves as expected, using expect() funciton.
