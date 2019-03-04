import {connect} from 'react-redux';
import Gpic from '_COMPONENTS/Gpic';
import {pickBlock,putBlock,reset} from '_ACTIONS/gpic';

const mapStateToProps = (state,ownProps)=>{
  return{
    holdpic:state.holdpic,
    pics:state.pics,
    nimg:state.nimg
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    resetpic:(pics)=>{
      dispatch(reset(pics))
    },
    pick:(i)=>{
      dispatch(pickBlock(i))
    },
    put:(i,pics,holdpic)=>{
      dispatch(putBlock(i,pics,holdpic))
    },
  }
}
const Gamepic = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gpic)
export default Gamepic