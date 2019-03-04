import {connect} from 'react-redux';
import {addTodo} from '_ACTIONS';
import Add from '_COMPONENTS/AddTodo'
const mapStateToProps = (state,ownProps)=>{
  return{
    place:'新增事项',
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    addClick:(e)=>{
      dispatch(addTodo(e))
    }
  }
}
const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add)
export default AddTodo
