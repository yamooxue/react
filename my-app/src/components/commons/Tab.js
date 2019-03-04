import '_STYLES/tab.less';
//定义一个react组件 继承React.Component
class Tab extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  componentDidMount(){
    this.changeTab(0)
  }
  render() {
    //jsx语法，可以让我们在react中直接使用标签语法
    return (
    <div className="tab-box" style={{width:"300px"}}>
      <div ref="tabtitle" className="tab-box-title">
        {
          this.props.titles.map((v,i)=>{
            return (
            <span key={i} 
            onClick={this.changeTab.bind(this,i)}
            style={{width:100/(this.props.titles.length)+'%'}}
            >{v}</span>
            )
          })
        }
      </div>
      <div ref="tabcon">
        {
          this.props.cons.map((v,i)=>{
            return (
            <div key={i} className="tab-box-con anima-zoomIn">{v}</div>
            )
          })
        }
      </div>
    </div>
    );
  }
  changeTab(i){
    $(this.refs['tabtitle']).children().eq(i).addClass('active').siblings().removeClass('active')
    $(this.refs['tabcon']).children().eq(i).removeClass('hide').siblings().addClass('hide')
  }
}
export default Tab;
