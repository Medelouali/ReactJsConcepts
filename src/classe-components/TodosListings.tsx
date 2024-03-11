import { Component } from 'react'
import Todo, { TodoProps } from './Todo'
import "./todo.css";

export class TodosListings extends Component<{ todos: TodoProps[] }> {
    constructor(props: { todos: TodoProps[] }){
        super(props);
        this.state={}
    }
  render() {
    return (
        <ul id="myUL">
            { 
                this.props.todos.map((item, index)=><Todo key={index} description={item.description} 
                label={item.label} isBookmarked={item.isBookmarked} ></Todo>) 
            }
        </ul>
    )
  }
}

export default TodosListings