import React, {Component} from "react";
import {connect} from "react-redux"


class TodoItems extends Component{

  handleDelete=(id)=>{
   this.props.deleteTodo(id);
  }
  render(){
 
    return(
      <div>
      {
       this.props.todos.length>0? this.props.todos.map((todo)=>{
        return( <p key={todo.id}>  
          <input type="checkbox" id={todo.id} />
            <span> {todo.desc}</span>
            <button id={todo.id}>edit</button>
            <button onClick={()=>{this.handleDelete(todo.id)}}>delete</button>
        </p>
        )
        })
        :<p>no todos left</p>
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