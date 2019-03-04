import '_STYLES/todolist.less';
export default class TodoList extends Component {
  render() {
    const { todos, onTodoClick,delClick,filter } = this.props
    return (
      <div className="todolist">
        <ul>
          {todos.map((todo,index) =>{
            return(
              <Todo
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                delClick={(e) => { 
                  delClick(todo.id)
                }}
                key={'li_'+filter+index}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
const Todo = ({ completed, text ,onClick, delClick}) => {
  return (
      <li
        onClick={(e)=>{
          $(e.target).hide(0).show(0,onClick)//重新触发动画效果
        }}
        className={completed?'animated flipInX completed':'animated flipInX'}>
        {text}
        <i onClick={(e)=>{
          e.preventDefault();
          e.stopPropagation();
          let $el = $(e.target.parentNode)
          $el.animate({marginRight:'100%',opacity:0,height:0,backGround:'#eee'},300,()=>{
            $el.removeAttr('style')
            delClick()
          })
        }}>删除</i>
      </li>
  )
}