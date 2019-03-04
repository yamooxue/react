const pic = ()=>{
  let a=[...(new Array(36)).keys()];
  return a
}
export const pics = (state=pic(),action)=>{
  let _state = Object.assign([],state)
  switch(action.type){
    case "RESET":
      _state.sort(function () {
        return Math.random() - Math.random()
      })
      return _state
    case "PUT_BLOCK":
      _state = Object.assign([],action.pics)
      let target = _state[action.index]
      _state[action.index] = _state[action.holdpic]
      _state[action.holdpic] = target
      return _state
    default:
      return state
  }
}


export const holdpic = (state=-1,action)=>{
  switch(action.type){
    case "PICK_BLOCK":
      return action.index
    case "PUT_BLOCK":
      return -1
    default:
      return state
  }
}