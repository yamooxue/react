const initialState = JSON.parse(localStorage.getItem('myNote')||'[]')
const todo = (state,action)=>{
  switch (action.type){
    case "ADD_TODO":
      return{
        id:action.id,
        completed:action.completed,
        text:action.text
      }
    case "TOGGLE_TODO":
      if(state.id!==action.id){
        return state
      }
      return Object.assign({},state,{completed:!state.completed})
    case "DEL_TODO":
      return state.id!==action.id
    default:
      return state
  }
}
const todos = (state = initialState,action)=>{
  switch (action.type){
    case "ADD_TODO":
      return[
        ...state,
        todo(undefined,action)
      ]
    case "TOGGLE_TODO":
      return state.map(v=>todo(v,action))
    case "DEL_TODO":
      return state.filter(v=>todo(v,action))
    default:
      return state
  }
}
export default todos