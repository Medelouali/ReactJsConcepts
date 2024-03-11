

import  { Component } from 'react'
import Todo from './Todo';

interface CycleProps{
    name: string;
    age: number
}

interface CycleState{
    counter: number,
    isTodoMounted: boolean
}


export class Cycle extends Component<CycleProps, CycleState> {

  constructor(props: CycleProps){
        super(props);
        this.state={
            counter: 0,
            isTodoMounted: true
        } as CycleState;
        this.unmountComponent=this.unmountComponent.bind(this);
        console.log("constructor was Called");
    }

    unmountComponent(){
        this.setState(()=>({ ...this.state, isTodoMounted: false }))
    }

    static getDerivedStateFromProps(props: CycleProps, state: CycleState){
        console.log("getDrivedStateFromProps was Called");
        return { counter: state.counter+props.age, isTodoMounted: state.isTodoMounted }
    }

    render() {
        console.log("render was Called");
        return (
            <div className="">
                <button onClick={this.unmountComponent}>Click button to unmount todo</button>
                { !!this.state.isTodoMounted && <Todo description='Today is a new day' isBookmarked={false} label='New Todo'/> }
            </div>
        )
    }

    componentDidMount(): void {
        console.log("componentDidMount was Called");
    }

    // Now the updating phase methods
    
    // getDerivedStateFromProps is called first
    
    shouldComponentUpdate(nextProps: Readonly<CycleProps>, nextState: Readonly<CycleState>, nextContext: any): boolean {
        console.log("shouldComponentUpdate is called");
        console.log("nextProps Value: " + nextProps);
        console.log("nextState Value: " + nextState);
        return true;
    }

    // render called here

    getSnapshotBeforeUpdate(prevProps: Readonly<CycleProps>, prevState: Readonly<CycleState>) {
        console.log("The props before the update: "+prevProps);
        console.log("The state before the update: "+prevState);
        return null;
    }

    componentDidUpdate(prevProps: Readonly<CycleProps>, prevState: Readonly<CycleState>, snapshot?: any): void {
        console.log("The props before the update: "+prevProps);
        console.log("The state before the update: "+prevState);
        console.log("The snapshot: "+snapshot);
    }

    // The unmounting phase 
    componentWillUnmount(): void {
        console.log("The hello component has unmounted");
    }
}

export default Cycle