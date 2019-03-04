import '_STYLES/snake.less';
let t;
export default class Snake extends Component{
  render(){
    const {snakeBody,begin,turn,restart,snakeFood,eatfood} = this.props;
    let s=snakeBody
    let bodyEL=[];
    for(let x = 0; x <s.size; x++) {
      let style = {
        top:s.trail[x].y*s.w+'px',
        left:s.trail[x].x*s.w+'px',
      }
      bodyEL.push(<div key={x} className="el" style={style}></div>)
    }
    t = setTimeout(begin,100)
    return (
      <Fragment>
        <p>{s.size-5}</p>
        <div className="snake-move-area">
          <div className="body"> 
          <div className="food" style={{left:snakeFood.x*s.w+'px',top:snakeFood.y*s.w+'px'}}></div>
          { bodyEL }
          </div>
        </div>
      </Fragment>
    )
  }
  componentWillUpdate() {
    const {snakeBody,begin,turn,restart,snakeFood,eatfood} = this.props;
    clearTimeout(t)
    let s=snakeBody
    if(JSON.stringify(s.trail[s.size-1]) == JSON.stringify(snakeFood)){
      clearTimeout(t)
      eatfood(snakeFood)
    }
    let max = 500/s.w -2
    if((s.x>max)||(s.y>max)||s.x<0||s.y<0){
      clearTimeout(t)
      restart()
    }
    document.onkeydown=function(e){
      e.preventDefault();
      if (e.keyCode == 40 && s.direction !== 'up') {
        turn('down')
      }
      if (e.keyCode == 39 && s.direction !== 'right') {
        turn('left')
      }
      if (e.keyCode == 38 && s.direction !== 'down') {
        turn('up')
      }
      if (e.keyCode == 37 && s.direction !== 'left') {
        turn('right')
      }
      if (e.keyCode == 32) {
        clearTimeout(t)
      }
    }
  }
}