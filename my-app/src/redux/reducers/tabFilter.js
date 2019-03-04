const tabFilter = (state=3,action)=>{
  switch(action.type){
    case "CHANGE_TAB":
      return action.index
    default:
      return state
  }
}
export default tabFilter