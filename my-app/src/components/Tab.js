import '_STYLES/tab.less';
//定义一个react组件 继承React.Component
export default class Tab extends Component {
  render() {
    //jsx语法，可以让我们在react中直接使用标签语法
    const {titles,changeTab,children,current} = this.props
    return (
    <div className="tab-box">
      <div ref="tabtitle" className="tab-box-title">
        {
          titles.map((v,i)=>{
            return (
            <span key={i} 
            onClick={()=>{changeTab(i)}}
            style={{width:100/(titles.length)+'%'}}
            className={current==i?'active':''}
            >{v}</span>
            )
          })
        }
      </div>
      <div ref="tabcon">
        <div className="tab-box-con animated zoomIn">{children[current]}</div>
      </div>
    </div>
    );
  }
}
