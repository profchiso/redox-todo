
import {addTodo,deleteTodo,editTodo} from "../actions/Actions"
import {initialState} from '../stores/Store';
export const RootReducer = (state=initialState,action) => {
  console.log(action);
  if(action.type==="ADD_TODO"){
   return{
     ...state,
     todos:[...state.todos,{id:state.todos.length+1,desc:action.todo,isCompleted:false}]
   } 

  }else if(action.type==="DELETE_TODO"){
    let rem = state.todos.filter((todo)=>todo.id!==action.id)
   return {
     ...state,
     todos:rem

    }
  }
 
return state;
}