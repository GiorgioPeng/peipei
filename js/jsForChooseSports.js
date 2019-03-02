//运动选择点切换
var sportChoose = $(".picture");
sportChoose[0].addEventListener("touchstart",function(ev){
  var ev = ev || window.event;
  var target = ev.target || ev.srcElement;
  if(target.nodeName.toLowerCase() == 'img'){
    if(target.src.match("8.png"))
      target.src="img/运动/选项框拷贝4.png";
    else
      target.src="img/运动/选项框拷贝8.png";
  }

},false)
