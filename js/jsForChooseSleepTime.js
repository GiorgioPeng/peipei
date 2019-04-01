var sleep = $(".sleep");
var sport = $('.sport');
var container1 = $("#container1");
var setTimeButton = $("#setTimeButton");
var back = $("#back");
var sleep_setTime1 = $(".sleep_setTime1");
sleep_setTime1[0].addEventListener("touchstart",function(){
  let left = 200;
  sleep.fadeOut();
  let set = setInterval(function () {
    left-=5;
    container1[0].style.left=left+"%";
    if(left===0)
    {
      clearInterval(set);
    }
    container1.fadeIn();
    setTimeButton.fadeIn();
  }, 20);
},false);               //两个页面的显示交替部分
back[0].addEventListener("touchstart",function(){
  let left=0;
  let set2 = setInterval(function () {
    left+=5;
    container1[0].style.left=left+"%";
    if(left===100)
    {
      container1.fadeOut();
      clearInterval(set2);
      setTimeButton.fadeOut();
      sleep.fadeIn();
    }
  }, 10);
},false);               //两个页面的显示交替部分


//选择时间的部分
var getUpTime = "";//提供给后端接口的起床时间


var chooseTime = $("#chooseTime");
var chooseNumberTime = $("#chooseNumberTime");
chooseNumberTime[0].addEventListener("touchend",function(event){
  let ev = event||window.event;
  let tar = ev.target||ev.srcElement;
  let center = $(".time3");
  if(tar.id!=="chooseNumberTime")
  {
    center[0].className=tar.className;
    tar.className="time3";
    if(tar.innerHTML.match('-'))
    {
      let count=0;
      let str = tar.innerHTML.split("-");
      for(let i=0;i<2;i++)
        if(str[i].length===4)
          str[i]="0"+str[i];    //确保每一个时间段都是00:00的格式
      getUpTime=str.join("-");
      for(let j=0;j<2;j++)
      {
        for(let i=0;i<5;i++)
        {
          if(i!==2)
          {
            chooseTime.find("p")[count].innerHTML=str[j][i];
            count++;
          }
        }
      }                   //进行时间显示

    }//针对xx:xx-xx:xx形式的进行处理
    else{
      if(tar.innerHTML.match("之前"))//针对什么时间之前的情况进行处理
      {
          let count=4;
          for(let i = 0;i<4;i++)
            chooseTime.find("p")[i].innerHTML="X";
          let str = tar.innerHTML.substr(0,tar.innerHTML.length-2);
          if(str.length===4)
            str="0"+str;
          getUpTime="XX:XX-"+str;
          for(let i=0;i<5;i++)
            if(str[i]!==":")
            {
              chooseTime.find("p")[count].innerHTML=str[i];
              count++;
            }
      }
      else {                        //针对什么时间之后进行处理
        let count=0;
        for(let i = 4;i<8;i++)
          chooseTime.find("p")[i].innerHTML="X";
        let str = tar.innerHTML.substr(0,tar.innerHTML.length-2);
        if(str.length===4)
          str="0"+str;
        getUpTime=str+"-XX:XX";
        for(let i=0;i<5;i++)
          if(str[i]!==":")
          {
            chooseTime.find("p")[count].innerHTML=str[i];
            count++;
          }
      }
    }
    sleep_setTime1.find("p")[0].innerHTML=getUpTime;
  }
},false)            //进行一个时间的同步显示

//切换到下一个页面  运动
var sleep_button = $('.sleep_button');
sleep_button[0].addEventListener('touchstart',function(){
  sleep.fadeOut();
  sleep[0].style.display="none";
  sport[0].style.display="block";
},false)
