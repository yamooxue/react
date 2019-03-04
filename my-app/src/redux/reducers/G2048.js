const table = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
]
const n = 4
const table2048 = (state=table,action)=>{
  let _state = Object.assign([],state)
  let resetCol = (up)=>{
    for (let i = 0; i < 4; i++) {
      let col = [] 
      for (let j = 0; j < 4; j++) {
        col.push(_state[j][i])
      }
      col = up?col.filter(v=>v>0).concat(col.filter(v=>v==0)):
      col.filter(v=>v==0).concat(col.filter(v=>v>0))
      for (let j = 0; j < 4; j++) {
        _state[j][i] = col[j]
      }
    }
  }
  let resetRow = (left)=>{
    for (let i = 0; i < 4; i++) {
      let a = _state[i].filter(v=>v>0)
      let b = _state[i].filter(v=>v==0)
      _state[i] = left?a.concat(b) : b.concat(a)
    }
  }
  switch (action.type) {
    case 'NEW_EL':
      let arr = []
      _state.forEach((v,r)=>{
        v.forEach((k,c)=>{
          if(k==0){ arr.push([r,c]) }
        })
      })
      if(arr.length>0){
        function getPoint(){
          let set = [Math.ceil(Math.random()*n)-1,Math.ceil(Math.random()*n)-1]
          let isBlank = arr.filter(v=>String(v)==String(set))
          if(isBlank.length>0){
            _state[set[0]][set[1]] = 2
            return true
          }else{
            getPoint()
          }
        }
        getPoint()
      }
      return _state
    case 'UP':
      resetCol(true)
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if(_state[j][i] == _state[j+1][i]){
            _state[j][i] += _state[j+1][i]
            _state[j+1][i] = 0
          }
        }
      }
      resetCol(true)
      return _state
    case 'DOWN':
      resetCol(false)
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j >0; j--) {
          if(_state[j][i] == _state[j-1][i]){
            _state[j][i] += _state[j-1][i]
            _state[j-1][i] = 0
          }
        }
      }
      resetCol(false)
      return _state
    case 'LEFT':
      resetRow(true)
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          if(_state[i][j] == _state[i][j+1]){
            _state[i][j] += _state[i][j+1]
            _state[i][j+1] = 0
          }
        }
      }
      resetRow(true)
      return _state
    case 'RIGHT':
      resetRow(false)
      for (let i = 0; i < 4; i++) {
        for (let j = 3; j >0; j--) {
          if(_state[i][j] == _state[i][j-1]){
            _state[i][j] += _state[i][j-1]
            _state[i][j-1] = 0
          }
        }
      }
      resetRow(false)
      return _state
    default:
      return state
  }
}
export default table2048