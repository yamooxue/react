import '_STYLES/g2048.less';
import { log } from 'util';
export default class G2048 extends Component{
  render(){
    const {table,start} = this.props;
    return (
      <table className="g2048">
        <tbody>
        {
          table.map((tr,r)=>{
            return (
            <tr key={"tr_"+r}>
              {tr.map((td,c)=>{
                return(
                  <td key={"td_"+c} className={'td-'+td}>{td==0?'':td}</td>
                )
              })}
            </tr>
            )
          })
        }
        </tbody>
      </table>
    )
  }
  componentDidMount() {
    const {start,toUp,toDown,toLeft,toRight} = this.props;
    start()
    document.onkeydown=function(e){
      e.preventDefault();
      if (e.keyCode == 38) {
        toUp()
      }
      if (e.keyCode == 39) {
        toRight()
      }
      if (e.keyCode == 40) {
        toDown()
      }
      if (e.keyCode == 37) {
        toLeft()
      }
    }
  }
}