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
    switch (sport_range.val()) {
      case '0':
        sport_range.css("backgroundSize","0% 100%");
        break;
      case '1':
        sport_range.css("backgroundSize","20% 100%");
        break;
      case '2':
        sport_range.css("backgroundSize","40% 100%");
        break;
      case '3':
        sport_range.css("backgroundSize","60% 100%");
        break;
      case '4':
        sport_range.css("backgroundSize","80% 100%");
        break;
      case '5':
        sport_range.css("backgroundSize","100% 100%");
        break;
      default:

    }
},false)
var sport_value_detail = []
$("input[name='sportsTypes']").change(function(){
  if($(this).is(":checked")){
    switch ($(this).val()) {
      case 'running':
        sport_value_detail.push(1);
        break;
      case 'badminton':
        sport_value_detail.push(2);
        break;
      case 'basketball':
        sport_value_detail.push(3);
        break;
      case 'football':
        sport_value_detail.push(4);
        break;
      case 'bike':
        sport_value_detail.push(5);
        break;
      case 'swimming':
        sport_value_detail.push(6);
        break;
      case 'bodyBuilding':
        sport_value_detail.push(7);
        break;
      case 'pingpangball':
        sport_value_detail.push(8);
        break;
      case 'yoga':
        sport_value_detail.push(9);
        break;
      default:
        break;
    }
  }
    else{
    switch ($(this).val()) {
      case 'running':
        sport_value_detail.splice(sport_value_detail.indexOf(1),1)
        break;
      case 'badminton':
        sport_value_detail.splice(sport_value_detail.indexOf(2),1)
        break;
      case 'basketball':
        sport_value_detail.splice(sport_value_detail.indexOf(3),1)
        break;
      case 'football':
        sport_value_detail.splice(sport_value_detail.indexOf(4),1)
        break;
      case 'bike':
        sport_value_detail.splice(sport_value_detail.indexOf(5),1)
        break;
      case 'swimming':
        sport_value_detail.splice(sport_value_detail.indexOf(6),1)
        break;
      case 'bodyBuilding':
        sport_value_detail.splice(sport_value_detail.indexOf(7),1)
        break;
      case 'pingpangball':
        sport_value_detail.splice(sport_value_detail.indexOf(8),1)
        break;
      case 'yoga':
        sport_value_detail.splice(sport_value_detail.indexOf(9),1)
        break;
      default:
        break;
    }
  }
})
sport_button = $('.sport_button');
sport = $(".sport");
book = $(".game");
sport_button[0].addEventListener('touchstart',function(){
  sport.hide(500);
  book.show(500);
},false)
