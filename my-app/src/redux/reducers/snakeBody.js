const sbody = {
  w:10,
  name:'snake',
  size:5,
  x:4,
  y:0,
  direction:'left',
  trail:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0}]
}

const snakeBody = (state=sbody,action)=>{
  let body = JSON.parse(JSON.stringify(state))
  switch(action.type){
    case "MOVE":
      switch(body.direction)
      {
        case 'left':
          body.x++;
          break;
        case 'right':
          body.x--;
          break;
        case 'up':
          body.y--;
          break;
        case 'down':
          body.y++
          break;
        default:
          body.x++;
      }
      body.trail.push({x:body.x,y:body.y})
      body.trail.shift()
      return body
    case "TURN_DIRECTION":
      body.direction = action.direction
      return body;
    case "GAME_OVER":
      return sbody;
    case "GROUN_UP":
      body.trail.push(action.food)
      body.size++;
      return body;
    default:
      return state
  }
}
export default snakeBody