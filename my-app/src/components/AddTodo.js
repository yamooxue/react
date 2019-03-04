export default class AddTodo extends Component{
  render(){
    const {addClick,place} = this.props
    let ipt;
    return(
      <div className="addinput clearfix">
        <input type="text" 
        onKeyDown={function(e){
          if(e.keyCode==13){
            $(e.target.nextSibling).click()
          }
        }}
        placeholder={place} 
        ref={node=>{ipt=node}}
        filter="ADD"/>
        <button onClick={()=>{
          if(ipt.value){
            addClick(ipt.value)
            ipt.value=''
          }
        }}>确定</button>
      </div>
    )
  }
}