var sleep = $(".sleep");//整个睡眠选择页面
var sport = $('.sport');//运动选择页面
var container1 = $("#container1");//选择睡眠时间的具体容器
// var setTimeButton = $("#setTimeButton");
var back = $("#back");//起床时间选择完成后返回框
var sleep_setTime1 = $(".sleep_setTime1");//进入起床时间选项的框
var get_up_time_choose = $("#get_up_time_choose");//起床时间选择框
var go_bed_time_choose = $("#go_bed_time_choose");//睡眠时间选择框
var getUpTime = "";//提供给后端接口的起床时间
var chooseTime = $("#chooseTime");//起床时间选择
var chooseNumberTime = $("#chooseNumberTime");//起床时间选择
var sleep_setTime2 = $(".sleep_setTime2");//睡眠时间选择框
var back1 = $("#back1");//睡眠时间选择完成后返回框
var goBedTime = "";//提供给后端接口的睡眠时间
var chooseTime1 = $("#chooseTime1");//睡眠时间选择框
var chooseNumberTime1 = $("#chooseNumberTime1");//睡眠时间选择框
var getUp = $("#getUp");//顶部LOG
var goBed = $("#goBed");//顶部LOG

sleep_setTime1[0].addEventListener("touchstart",function(){
  get_up_time_choose[0].style.display="block";
  getUp[0].style.backgroundImage = 'url(img/睡眠/起床时间段选择.png)';
  go_bed_time_choose[0].style.display="none";
  goBed[0].style.backgroundImage = 'url(img/睡眠/睡眠时间段.png)';
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
    // setTimeButton.fadeIn();
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
      // setTimeButton.fadeOut();
      sleep.fadeIn();
    }
  }, 10);
},false);               //两个页面的显示交替部分


//选择时间的部分
chooseNumberTime[0].addEventListener("touchend",function(event){
  let ev = event||window.event;
  let tar = ev.target||ev.srcElement;
  let center = $(".time3:first");
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

//-----------------------------------------------
//-----------------------------------------------
//-----------------------------------------------


sleep_setTime2[0].addEventListener("touchstart",function(){
  get_up_time_choose[0].style.display="none";
  getUp[0].style.backgroundImage = 'url(img/睡眠/起床时间段.png)';
  go_bed_time_choose[0].style.display="block";
  goBed[0].style.backgroundImage = 'url(img/睡眠/睡眠时间段选择.png)';
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
    // setTimeButton.fadeIn();
  }, 20);
},false);//睡眠时间设置

back1[0].addEventListener("touchstart",function(){
  let left=0;
  let set2 = setInterval(function () {
    left+=5;
    container1[0].style.left=left+"%";
    if(left===100)
    {
      container1.fadeOut();
      clearInterval(set2);
      // setTimeButton.fadeOut();
      sleep.fadeIn();
    }
  }, 10);
},false);               //两个页面的显示交替部分
//选择时间的部分

chooseNumberTime1[0].addEventListener("touchend",function(event){
  let ev = event||window.event;
  let tar = ev.target||ev.srcElement;
  let center = $(".time3:last");
  if(tar.id!=="chooseNumberTime1")
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
      goBedTime=str.join("-");
      for(let j=0;j<2;j++)
      {
        for(let i=0;i<5;i++)
        {
          if(i!==2)
          {
            chooseTime1.find("p")[count].innerHTML=str[j][i];
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
            chooseTime1.find("p")[i].innerHTML="X";
          let str = tar.innerHTML.substr(0,tar.innerHTML.length-2);
          if(str.length===4)
            str="0"+str;
          goBedTime="XX:XX-"+str;
          for(let i=0;i<5;i++)
            if(str[i]!==":")
            {
              chooseTime1.find("p")[count].innerHTML=str[i];
              count++;
            }
      }
      else {                        //针对什么时间之后进行处理
        let count=0;
        for(let i = 4;i<8;i++)
          chooseTime1.find("p")[i].innerHTML="X";
        let str = tar.innerHTML.substr(0,tar.innerHTML.length-2);
        if(str.length===4)
          str="0"+str;
        goBedTime=str+"-XX:XX";
        for(let i=0;i<5;i++)
          if(str[i]!==":")
          {
            chooseTime1.find("p")[count].innerHTML=str[i];
            count++;
          }
      }
    }
    sleep_setTime2.find("p")[0].innerHTML=goBedTime;
  }
},false)            //进行一个时间的同步显示
//-----------------------------------------------
//切换到下一个页面  运动
var sleep_button = $('.sleep_button');
sleep_button[0].addEventListener('touchstart',function(){
  sleep.fadeOut();
  sleep[0].style.display="none";
  sport[0].style.display="block";
},false)
