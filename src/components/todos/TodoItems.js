import React, {Component} from "react";
import {connect} from "react-redux"


class TodoItems extends Component{
  render(){
    console.log(this.props);
    return(
      <div>
      {
        this.props.todos.map((todo)=>{
        return( <p key={todo.id}>  
          <input type="checkbox" />
            <span> {todo.desc}</span>
            <button id={todo.id}>edit</button>
            <button id={todo.id}>delete</button>
        </p>
        )
        })
      }
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
return{
  todos:state.todos
}
}
const mapDispatchToProps =(dispatch)=>{
  return{
    deleteTodo:(id)=>{dispatch({type:"DELETE_TODO",id:id})},
    editTodo: (id)=>{dispatch({type: "EDIT_TODO",id:id})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (TodoItems);