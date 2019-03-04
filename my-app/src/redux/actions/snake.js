//本体
export const setSnake = (direction,x,y)=>{
  return {
    type:"SET_SNAKE",
    direction,
    x,
    y
  }
}
//方向转换
export const turnDirection = (direction)=>{
  return {
    type:"TURN_DIRECTION",
    direction
  }
}
//运动
export const move = (body)=>{
  return {
    type:"MOVE",
    body
  }
}
//合并
export const growUp = (food)=>{
  return {
    type:"GROUN_UP",
    food
  }
}
//结束
export const gameOver = ()=>{
  return {
    type:"GAME_OVER",
  }
}
//食物
export const creatFood = ()=>{
  return {
    type:"CREAT_FOOD",
  }
}