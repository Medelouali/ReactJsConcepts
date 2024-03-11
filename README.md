# React Component Lifecycle Phases

In React, a component passes through three main phases:

## 1. Mounting

During mounting, the following methods are called:

- `constructor`: Initializes the component state and binds event handlers.
- `getDerivedStateFromProps`: Updates the state based on changes in props.
- `render`: Renders the component UI.
- `componentDidMount`: Executes after the component is mounted to the DOM, often used for initial data fetching or setting up subscriptions.

## 2. Updating

During updating, the following methods are called when props or state change:

- `getDerivedStateFromProps`: Updates the state based on changes in props.
- `shouldComponentMount`: Determines if the component should re-render, based on changes in props or state.
- `render`: Renders the updated component UI.
- `getSnapshotBeforeUpdate`: Captures information from the DOM before it's potentially changed.
- `componentDidUpdate`: Executes after the component is updated in the DOM, often used for DOM manipulation or fetching data.

## 3. Unmounting

During unmounting, the following method is called:

- `componentWillUnmount`: Executes just before the component is unmounted and destroyed, used for cleanup tasks like unsubscribing from event listeners or cancelling network requests.

