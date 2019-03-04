const food = ()=>{
  return {
    x:Math.ceil(Math.random()*48),
    y:Math.ceil(Math.random()*48),
  }
}

const snakeFood = (state=food(),action)=>{
  switch(action.type){
    case "CREAT_FOOD":
      return food();
    default:
      return state
  }
}
export default snakeFood