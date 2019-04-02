
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
  $(".information")[0].style.display="none";
  $(".sleep")[0].style.display="block"
},false);
//------------------------------------------------------------------------------------------
information_range = $("#information_range");
information_range[0].addEventListener("change",function(){
  // console.log(typeof(information_range[0].value));
  // console.log(information_range[0].style.backgroundSize);
  switch (information_range[0].value) {
    case '0':
      // console.log("here");
      information_range[0].style.backgroundSize="0% 100%";
      break;
    case '1':
      information_range[0].style.backgroundSize="20% 100%";
      break;
    case '2':
      information_range[0].style.backgroundSize="40% 100%";
      break;
    case '3':
      information_range[0].style.backgroundSize="60% 100%";
      break;
    case '4':
      information_range[0].style.backgroundSize="80% 100%";
      break;
    case '5':
      information_range[0].style.backgroundSize="100% 100%";
      break;
    default:
      // console.log("there");
  }
},false);
