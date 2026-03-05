### What is JSX, and why is it used?
JavaScript XML -> to use HTML in JS specially in React.

### What is the difference between State and Props?
Props are property passed from the parent to child component and it can't be changed. State is changeable. If there is any changes in state then the component re-renders.

### What is the useState hook, and how does it work?
useState hook tracks and manages data in components.
let's have an example: const [count, setCount] = useState(0);
here initial value of count is 0. and later on we can change the state if count using callback setCount.

### How can you share state between components in React?
<component state={property}/>

### How is event handling done in React?
using onClick in JSX.

const eventHandler = () => {
    ........
}

onClick = {eventHandler}

