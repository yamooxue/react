import {connect} from 'react-redux';
import {turnDirection,growUp,move,gameOver,creatFood} from '_ACTIONS/snake.js';
import Snake from '_COMPONENTS/Snake';


const mapStateToProps = (state,ownProps)=>{
  return{
    snakeBody:state.snakeBody,
    snakeFood:state.snakeFood
  }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return{
    begin:()=>{
      dispatch(move())
    },
    turn:(d)=>{
      dispatch(turnDirection(d))
      dispatch(move())
    },
    restart:()=>{
      dispatch(gameOver())
    },
    eatfood:(food)=>{
      dispatch(growUp(food))
      dispatch(creatFood())
    }
  }
}


const mySnake = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Snake)
export default mySnake