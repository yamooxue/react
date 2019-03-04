import Tab from '_CONTAINERS/Tab';
import Popup from '_COMPONENTS/Popup';
import Tip from '_COMPONENTS/Tip';
import VisibleToDoList from '_CONTAINERS/VisibleToDoList';
import Snake from '_CONTAINERS/Snake';
import G2048 from '_CONTAINERS/G2048';
import Gpic from '_CONTAINERS/Gpic';
import AddToDo from '_CONTAINERS/AddToDo';
import '_STYLES/reset.less';
import '_STYLES/common.less';
//定义一个react组件 继承React.Component
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'title',
      show:false,
      curItem:{},
      list1: ['react', 'angular','vue'],
      list2: ['aaaa', '222','app'],
      list3: ['aaaa', '333','app'],
      inputValue:''
    }
    this.popInputChange = this.popInputChange.bind(this)
    this.confirm = this.confirm.bind(this)
    this.cancel = this.cancel.bind(this)
  }
  render() {
    //jsx语法，可以让我们在react中直接使用标签语法
    $("body").css({"overflow":this.state.show?'hidden':''})
    return (
      <div className="mobile-main todolist">
        <Tab titles={['待办事项','贪食蛇','2048','拼图']} >
          <Fragment>
            <AddToDo/>
            <VisibleToDoList filter="ALL"/>
          </Fragment>
          <Snake/>
          <G2048/>
          <Gpic/>
          <div></div>
        </Tab>
      </div>
    );
  }
  confirm(){
    this.setState({ show:false })
    // this.props.itemEdit(this.props.index,this.state.inputValue)
  }
  cancel(){
    this.setState({ show:false })
  }
  popInputChange(e){
    e.stopPropagation();
    this.setState({ curItem : {inputValue: e.target.value} })
  }
}
export default App;
