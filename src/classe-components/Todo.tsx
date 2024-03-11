

import { Component } from 'react'
import "./todo.css";

export interface TodoProps{
    label: string;
    description: string,
    isBookmarked: boolean;
}

export interface TodoState{
    isBookmarked: boolean;
    counter: number;
}

export class Todo extends Component<TodoProps, TodoState> {
    constructor(props: TodoProps){
        super(props);
        this.state={
            counter: 0,
            isBookmarked: false
        }

        this.incrementCounter=this.incrementCounter.bind(this);
    }

    incrementCounter(){
        this.setState({ 
            counter: this.state.counter+1, 
            isBookmarked: this.state.isBookmarked 
        });
    }

    componentWillUnmount(): void {
        console.log("The toto component was unmounted")
    }

  render() {
    if(this.props.isBookmarked)return <li className='checked'>Pay bills</li>;
    return (
        <li>Pay bills</li>
    )
  }
}

export default Todo