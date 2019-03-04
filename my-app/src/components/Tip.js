import '_STYLES/tip.less';
class Tip {
  constructor(args){
    this.options ={
      msg:'注意',
      time:2000
    }
    this.el = document.createElement('div');
    $(this.el).addClass('tip-box')
  }
  show(msg){
    $(this.el).text(this.options.msg)
    document.body.appendChild(this.el);
    return new Promise(function (resolve,reject) {
      setTimeout(function(){
        document.body.removeChild(this.el)
        resolve('11')
      }.bind(this), this.options.time);
    }.bind(this))
  }
}
export default function Tip(args){
  var tip = new Tip()
  tip.options = Object.assign(tip.options,args)
  return new Promise(function (resovle,reject) { 
    tip.show().then(()=>{
      resovle()
    })
  })
}