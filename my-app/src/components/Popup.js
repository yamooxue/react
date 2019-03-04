import '_STYLES/popup.less';
class Popup extends Component {
  constructor(props){
    super(props)
    this.state = Object.assign({
      title: '修改信息',
    })
  }
  render(){
    const _in = this.props.show ? ' anima-slideInDown' : ' anima-slideOutUp'
    const _fade = this.props.show ? ' anima-fadeIn' : ' anima-fadeOut'
    return(
    <Fragment>
      <div className="popup">
        <div className={"popup-content"+_in}>
          {this.props.children}
        </div>
      </div>
      <div className={"mask"+_fade}></div>
    </Fragment>
    )
  }
}
export default Popup