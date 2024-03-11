

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
        console.log("constructor of Cycle was Called");
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

export default Cycle