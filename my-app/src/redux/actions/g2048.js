//新增
export const newEl = (table)=>{
  return {
    type:"NEW_EL",
    table
  }
}
export const up = (table)=>{
  return {
    type:"UP",
    table
  }
}
export const down = (table)=>{
  return {
    type:"DOWN",
    table
  }
}
export const left = (table)=>{
  return {
    type:"LEFT",
    table
  }
}
export const right = (table)=>{
  return {
    type:"RIGHT",
    table
  }
}