import {connect} from 'react-redux';
import {setVisiblity} from '_ACTIONS';
import Footer from '_COMPONENTS/Footer'
const mapStateToProps = (state,ownProps)=>{
  return{
    filters:[{type:'ALL',name:'全部事项'},{type:'COMPLETED',name:'已完成'},{type:'UNCOMPLETED',name:'未完成'}],
    currentFilter:state.visibilityFilter
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    setFilter:(e)=>{
      dispatch(setVisiblity(e))
    }
  }
}
const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Footer)
export default Filter