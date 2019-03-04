//
export const pickBlock = (index)=>{
  return {
    type:"PICK_BLOCK",
    index
  }
}
export const putBlock = (index,pics,holdpic)=>{
  return {
    type:"PUT_BLOCK",
    index,
    pics,
    holdpic
  }
}
export const reset = (pics)=>{
  return {
    type:"RESET",
    pics
  }
}