let nextToDoId = 5;
export const addTodo = (text)=>{
  return {
    type:"ADD_TODO",
    completed:false,
    id:nextToDoId++,
    text
  }
}
export const setVisiblity = (filter)=>{
  return {
    type:"SET_VISIBILITY",
    filter
  }
}
export const toggleTodo = (id)=>{
  return {
    type:"TOGGLE_TODO",
    id
  }
}
export const delTodo = (id)=>{
  return {
    type:"DEL_TODO",
    id
  }
}
export const changeTab = (index)=>{
  return {
    type:"CHANGE_TAB",
    index
  }
}