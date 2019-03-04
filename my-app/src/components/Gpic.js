import '_STYLES/gpic.less';
export default class Gpic extends Component{
  render(){
    const {pick,put,holdpic,resetpic,pics} = this.props
    let w = 500
    let num = 6
    return (
      <Fragment>
        <button onClick={resetpic}>开始</button>
        <div className="table" style={{width: '500px',position: 'relative'}}>
          {pics.map((k,i)=>{
            return (<div 
            className={"bl-"+k} 
            index={k} 
            key={"bl-"+k} 
            onClick={()=>{
              holdpic==-1 ? pick(i) : put(i,pics,holdpic)
            }}
            style={{
              zIndex: holdpic==i ?999:1,
              boxShadow: holdpic==i ?'2px 2px 10px #000':'',
              transform: holdpic==i ?'scale(1.2)':'scale(1)',
              transition: 'transform .5s',
              overflow: 'hidden',
              boxSizing: 'border-box',
              MozBoxSizing: 'border-box',
              WebkitBoxSizing: 'border-box',
              border: '1px solid white',
              width: w/num+'px',
              height: w/num+'px',
              position:'absolute',
              top:(w/num*Math.floor(i/num))+'px',
              left:(w/num*Math.floor(i%num))+'px',
            }}
            ><img src={require("_STYLES/images/1.jpg")} width={w} height={w} style={{
              position:'absolute',
              top:-(w/num*Math.floor(k/num))+'px',
              left:-(w/num*Math.floor(k%num))+'px',
            }}/></div>)
          })}
        </div>
      </Fragment>
    )
  }
  componentDidUpdate() {
    var error = $('.table div').filter(function(i){
      return parseInt($(this).attr('index'))!==i
    }).length
    console.log(error);
    if(error==0){
      $('button').text('重新开始')
    }else{
      $('button').text('开始')
    }
  }
  
}