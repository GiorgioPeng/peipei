//运动选择点切换
var sportChoose = $(".sport_picture");
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
//值选择
sport_range = $("#sport_range");
sport_range[0].addEventListener("change",function(){
    switch (sport_range[0].value) {
      case '0':
        sport_range[0].style.backgroundSize="0% 100%";
        break;
      case '1':
        sport_range[0].style.backgroundSize="20% 100%";
        break;
      case '2':
        sport_range[0].style.backgroundSize="40% 100%";
        break;
      case '3':
        sport_range[0].style.backgroundSize="60% 100%";
        break;
      case '4':
        sport_range[0].style.backgroundSize="80% 100%";
        break;
      case '5':
        sport_range[0].style.backgroundSize="100% 100%";
        break;
      default:

    }
},false)
