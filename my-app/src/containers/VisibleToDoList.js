import {connect} from 'react-redux';
import {delTodo,toggleTodo} from '_ACTIONS';
import Todolist from '_COMPONENTS/Todolist';

const mapStateToProps = (state,ownProps)=>{
  localStorage.setItem('myNote',JSON.stringify(state.todos))
  return{
    todos: getVisibleTodos(state.todos,ownProps.filter||state.visibilityFilter)
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    onTodoClick:(id)=>{
      dispatch(toggleTodo(id))
    },
    delClick:(id)=>{
      dispatch(delTodo(id))
    },
  }
}
const getVisibleTodos = (todos,filter="ALL")=>{
  switch(filter){
    case "ALL":
      return todos
    case "COMPLETED":
      return todos.filter(t=>t.completed)
    case "UNCOMPLETED":
      return todos.filter(t=>!t.completed)
    default:
      return todos
  }
}

const FilterList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todolist)
export default FilterList
