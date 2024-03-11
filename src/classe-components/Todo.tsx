

import { Component } from 'react'
import "./todo.css";

interface CycleProps{
    isBookmarked: boolean;
    description: string;
    label: string;
}

interface CycleState{
    isBookmarked: false,
    counter: number,
    isTodoMounted: false,
}

export class Todo extends Component<CycleProps, CycleState> {
    constructor(props: CycleProps){
        super(props);
        this.state={
            isBookmarked: false,
            counter: 0,
            isTodoMounted: false,
        }

        this.incrementCounter=this.incrementCounter.bind(this);
    }

    incrementCounter(){
        this.setState({ 
            counter: this.state.counter+1, 
            isBookmarked: this.state.isBookmarked 
        });
    }

    static getDerivedStateFromProps(props: CycleProps, state: CycleState){
        console.log("getDrivedStateFromProps of Todo was Called");
        return { counter: state.counter, isTodoMounted: state.isTodoMounted }
    }

  render() {
    if(this.props.isBookmarked)return <li className='checked'>Pay bills</li>;
    return (
        <li>Pay bills</li>
    )
  }

  componentDidMount(): void {
    console.log("componentDidMount of Todo was Called");
}

// Now the updating phase methods

// getDerivedStateFromProps is called first

shouldComponentUpdate(nextProps: Readonly<CycleProps>, nextState: Readonly<CycleState>, nextContext: any): boolean {
    console.log("shouldComponentUpdate of Todo is called");
    console.log("nextProps Value of Todo: " , nextProps);
    console.log("nextState Value of Todo: " , nextState);
    return true;
}

// render called here

getSnapshotBeforeUpdate(prevProps: Readonly<CycleProps>, prevState: Readonly<CycleState>) {
    console.log("The props before the update of Todo: " , prevProps);
    console.log("The state before the update of Todo: " , prevState);
    return null;
}

componentDidUpdate(prevProps: Readonly<CycleProps>, prevState: Readonly<CycleState>, snapshot?: any): void {
    console.log("The props before the update of Todo: "+prevProps);
    console.log("The state before the update of Todo: "+prevState);
    console.log("The snapshot of Todo: "+snapshot);
}

// The unmounting phase 
componentWillUnmount(): void {
    console.log("The Todo component has unmounted");
}
}

export default Todo