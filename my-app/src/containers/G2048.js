import {connect} from 'react-redux';
import G2048 from '_COMPONENTS/G2048';
import {newEl,up,down,left,right} from '_ACTIONS/g2048';

const mapStateToProps = (state,ownProps)=>{
  return{
    table:state.table2048
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    start:()=>{
      dispatch(newEl())
      dispatch(newEl())
    },
    toUp:()=>{
      dispatch(up())
      setTimeout(() => {
        dispatch(newEl())
      }, 100);
    },
    toDown:()=>{
      dispatch(down())
      setTimeout(() => {
        dispatch(newEl())
      }, 100);
    },
    toLeft:()=>{
      dispatch(left())
      setTimeout(() => {
        dispatch(newEl())
      }, 100);
    },
    toRight:()=>{
      dispatch(right())
      setTimeout(() => {
        dispatch(newEl())
      }, 100);
    }
  }
}
const Game2048 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(G2048)
export default Game2048