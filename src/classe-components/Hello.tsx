

import { Component } from 'react'
import Todo from './Todo';

interface HelloProps{
    name: string;
    age: number
}

interface HelloState{
    counter: number,
    isTodoMounted: boolean
}

export class Hello extends Component<HelloProps, HelloState> {
    constructor(props: HelloProps){
        super(props);
        this.state={
            counter: 0,
            isTodoMounted: true
        } as HelloState;
        this.unmountComponent=this.unmountComponent.bind(this);
        console.log("constructor was Called");
    }

    unmountComponent(){
        this.setState(()=>({ ...this.state, isTodoMounted: false }))
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

}

export default Hello