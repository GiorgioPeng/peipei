var sleep = $(".sleep");
var sport = $(".sport");
var smoking = $(".smoking");
var game = $(".game");
var information = $(".information");

var topLogo = $(".topLogo");
// console.log(topLogo.length);
try {
for(let i = 0;i<topLogo.length;i++)
topLogo[i].addEventListener("touchstart",function(event){
  var ev=event||window.event;
  var target = ev.target||ev.srcElement;
  if(target.nodeName.toLowerCase() == "img")
    {
      var string = target.className.split(" ");
      var choose = string.pop();
      // console.log(choose);
      switch (choose) {
        case 'logoForGames':
          game.show(500);
          sport.hide(500);
          smoking.hide(500);
          information.hide(500);
          sleep.hide(500);
          break;
        case 'logoForSports':
          sport.show(500);
          sleep.hide(500);
          smoking.hide(500);
          information.hide(500);
          game.hide(500);
          break;
        case 'logoForSmoking':
          smoking.show(500);
          game.hide(500);
          information[0].style.display='none';
          sleep.hide(500);
          sport.hide(500);
          break;
        case 'logoForInformation':
          information.show(500);
          game.hide(500);
          sleep.hide(500);
          sport.hide(500);
          smoking.hide(500);
          break;
        case 'logoForSleepTime':
          sleep.show(500);
          smoking.hide(500);
          sport.hide(500);
          information.hide(500);
          game.hide(500);
          break;
        default:

      }
    }
},false);
}
catch (error) {
  console.error("nothing");
}
//________________________________________________________________________________
var winHeight = $(window).height(); //获取当前页面高度
               $(window).resize(function() {
                   var thisHeight = $(this).height();
                   if (winHeight - thisHeight > 50) {
                       //当软键盘弹出，在这里面操作
                       //alert('aaa');
                       $('body').css('height', winHeight + 'px');
                   } else {
                       //alert('bbb');
                       //当软键盘收起，在此处操作
                       $('body').css('height', '100%');
                   }
               });
