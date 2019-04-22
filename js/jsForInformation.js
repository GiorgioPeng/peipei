
information_male_logo = $("#male+label img");
information_female_logo = $("#female+label img");
information_male = $("#male");
information_female = $("#female");
information_male[0].addEventListener("change",function(){
  // console.log("change male");
  if(information_male[0].checked)
  {
    information_male_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E7%94%B7%E7%BB%BF.png";
    information_female_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E5%A5%B3%E7%81%B0.png";
  }
  else
  {
    information_male_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E7%94%B7%E7%81%B0.png";
    information_female_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E5%A5%B3%E7%BA%A2.png";
  }
},false)

information_female[0].addEventListener("change",function(){
  // console.log("change female");
  if(information_female[0].checked)
  {
      information_male_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E7%94%B7%E7%81%B0.png";
      information_female_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E5%A5%B3%E7%BA%A2.png";
  }
  else
  {
      information_male_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E7%94%B7%E7%BB%BF.png";
      information_female_logo[0].src="img/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/%E5%A5%B3%E7%81%B0.png";
  }
},false)
//--------------------------------------------------------------------------------------
information_button = $(".information_button");
information_button[0].addEventListener("touchstart",function(){
  $(".information").hide(500);
  $(".sleep").show(500);
},false);
//------------------------------------------------------------------------------------------
information_range = $("#information_range");
information_range[0].addEventListener("change",function(){
  // console.log(typeof(information_range[0].value));
  // console.log(information_range[0].style.backgroundSize);
  switch (information_range.val()) {
    case '0':
      // console.log("here");
      information_range.css("backgroundSize","0% 100%");
      break;
    case '1':
      information_range.css("backgroundSize","20% 100%");
      break;
    case '2':
      information_range.css("backgroundSize","40% 100%");
      break;
    case '3':
      information_range.css("backgroundSize","60% 100%");
      break;
    case '4':
      information_range.css("backgroundSize","80% 100%");
      break;
    case '5':
      information_range.css("backgroundSize","100% 100%");
      break;
    default:
      // console.log("there");
  }
},false);

//______________________________________________________________________专业选择下拉框
let major_choose_detail = $(".major_choose_detail");
let major_choose = $(".major_choose");
let major = $("#major_choose");
let major_text = $("#major_choose p")
major[0].addEventListener("touchstart",function(){
    major_choose.slideToggle();
},false);
for (let i = 0; i < major_choose_detail.length; i++) {
  major_choose_detail[i].addEventListener('touchstart',function(){
      major_text.text(major_choose_detail[i].innerHTML);
  },false)
}
//________________________________________________________________________________
let n_o_s = $("#n_o_s");
let area_choose = $("#area_choose");
let area_choose_detail = $(".area_choose_detail");
let n_o_s_text = $("#n_o_s p")
n_o_s[0].addEventListener("touchstart",function(){
  area_choose.slideToggle();
},false);
for(let i = 0 ; i < area_choose_detail.length;i++){
  area_choose_detail[i].addEventListener("touchstart",function(){
    n_o_s_text.text(area_choose_detail[i].innerHTML);
  },false);
}


let provence = $("#provence");
let s_provence = $("#s_provence");
let n_provence = $("#n_provence");
let p_choose = $(".p_choose");
let provence_text = $("#provence p");
provence[0].addEventListener("touchstart",function(){
  if(n_o_s_text.text()=="南方")
  {
    s_provence.slideToggle();
  }
  if(n_o_s_text.text()=="北方")
  {
    n_provence.slideToggle();
  }
},false);
for(let i = 0 ; i < p_choose.length;i++){
  p_choose[i].addEventListener("touchstart",function(){
    provence_text.text(p_choose[i].innerHTML);
  },false);
}
