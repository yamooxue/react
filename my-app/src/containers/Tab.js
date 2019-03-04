import {connect} from 'react-redux';
import {changeTab} from '_ACTIONS';
import Tab from '_COMPONENTS/Tab'
const mapStateToProps = (state,ownProps)=>{
  return{
    titles:ownProps.titles,
    children:ownProps.children,
    current:state.tabFilter
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    changeTab:(e)=>{
      dispatch(changeTab(e))
    }
  }
}
const Filter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tab)
export default Filter