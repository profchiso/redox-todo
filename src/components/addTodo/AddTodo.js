import React, {Component} from "react";
import {connect} from "react-redux";

class AddTodo extends Component{
  addTodo=(e)=>{
    e = document.getElementById("add_todo");
    if(e.value.length>1){
      this.props.addTodo(e);
      e.value=""
    } 
  }
  handleKeyPress=(e)=>{
    console.log(e.keyCode);

  }
  render(){
    console.log(this.props);
    return(
      <div>
        <input id="add_todo" onKeyPress={this.handleKeyPress} />
        <button onClick={this.addTodo}>Add</button>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return{ 
    ...state,
    todos:state.todos
  }
}
const mapDispatchToprops =(dispatch)=>{
return{
  addTodo:(e)=>{dispatch({type:"ADD_TODO",todo:e.value})}
}
}
export default connect(mapStateToProps,mapDispatchToprops) (AddTodo);