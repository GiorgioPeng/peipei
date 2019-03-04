var sleep = $(".sleep");
var sport = $(".sport");
var smoking = $(".smoking");
var game = $(".game");
var information = $(".information");

var topLogo = $("body");
try {
topLogo[0].addEventListener("touchstart",function(event){
  var ev=event||window.event;
  var target = ev.target||ev.srcElement;
  if(target.nodeName.toLowerCase() == "img")
    {
      var string = target.className.split(" ");
      var choose = string.pop();
      console.log(choose);
      switch (choose) {
        case 'logoForGames':
          game[0].style.display="block";
          sport[0].style.display="none";
          smoking[0].style.display="none";
          information[0].style.display="none";
          sleep[0].style.display="none";
          break;
        case 'logoForSports':
          sport[0].style.display="block";
          sleep[0].style.display="none";
          smoking[0].style.display="none";
          information[0].style.display="none";
          game[0].style.display="none";
          break;
        case 'logoForSmoking':
          smoking[0].style.display="block";
          game[0].style.display="none";
          information[0].style.display='none';
          sleep[0].style.display="none";
          sport[0].style.display="none";
          break;
        case 'logoForInformation':
          information[0].style.display="block";
          game[0].style.display="none";
          sleep[0].style.display="none";
          sport[0].style.display="none";
          smoking[0].style.display="none";
          break;
        case 'logoForSleepTime':
          sleep[0].style.display="block";
          smoking[0].style.display="none";
          sport[0].style.display="none";
          information[0].style.display="none";
          game[0].style.display="none";
          break;
        default:

      }
    }
},false);
}
catch (error) {
  console.error("nothing");
}
