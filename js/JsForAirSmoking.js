smoking_range = $("input[name='smoking_range']");
smoking_range[0].addEventListener("change",function(){
  // console.log(typeof(smoking_range[0].value));
  // console.log(smoking_range[0].style.backgroundSize);
  switch (smoking_range[0].value) {
    case '0':
      // console.log("here");
      smoking_range[0].style.backgroundSize="0% 100%";
      break;
    case '1':
      smoking_range[0].style.backgroundSize="20% 100%";
      break;
    case '2':
      smoking_range[0].style.backgroundSize="40% 100%";
      break;
    case '3':
      smoking_range[0].style.backgroundSize="60% 100%";
      break;
    case '4':
      smoking_range[0].style.backgroundSize="80% 100%";
      break;
    case '5':
      smoking_range[0].style.backgroundSize="100% 100%";
      break;
    default:
      // console.log("there");
  }
},false);
//_______________________________________________________________________
 smoking_true = $('#smoking_true+label div');
 smoking_false = $('#smoking_false+label div');
 smoking_true[0].addEventListener('touchstart',function(){
   if(smoking_true[0].style.transform!=="rotate(360deg)")
   smoking_true[0].style.transform="rotate(360deg)";
   else {
     smoking_true[0].style.transform="rotate(0deg)";
   }

 },false);
 smoking_false[0].addEventListener('touchstart',function(){
   if(smoking_false[0].style.transform!=="rotate(360deg)")
   smoking_false[0].style.transform="rotate(360deg)";
   else {
     smoking_false[0].style.transform="rotate(0deg)";
   }
 },false);
