export default class Foot extends Component{
  render(){
    const {filters,setFilter,currentFilter} = this.props;
    return (
      <ul>
        {
          filters.map((v,i)=>{
            return(
              <span className={currentFilter==v.type?'active':''} key={v.type+i} onClick={()=>{setFilter(v.type)}}>{v.name}</span>
            )
          })
        }
      </ul>
    )
  }
}