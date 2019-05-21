smoking_range = $("input[name='smoking_range']");
smoking_range[0].addEventListener("change",function(){
  // console.log(typeof(smoking_range[0].value));
  // console.log(smoking_range[0].style.backgroundSize);
  switch (smoking_range.val()) {
    case '0':
      // console.log("here");
      smoking_range.css("backgroundSize","0% 100%");
      break;
    case '1':
      smoking_range.css("backgroundSize","20% 100%");
      break;
    case '2':
      smoking_range.css("backgroundSize","40% 100%");
      break;
    case '3':
      smoking_range.css("backgroundSize","60% 100%");
      break;
    case '4':
      smoking_range.css("backgroundSize","80% 100%");
      break;
    case '5':
      smoking_range.css("backgroundSize","100% 100%");
      break;
    default:
      // console.log("there");
  }
},false);

//_______________________________________________________________________
air_range = $('input[name="air_range"]');
air_range[0].addEventListener("change",function(){
  // console.log(typeof(smoking_range[0].value));
  // console.log(smoking_range[0].style.backgroundSize);
  switch (air_range.val()) {
    case '0':
      // console.log("here");
      air_range.css("backgroundSize","0% 100%");
      break;
    case '1':
      air_range.css("backgroundSize","20% 100%");
      break;
    case '2':
      air_range.css("backgroundSize","40% 100%");
      break;
    case '3':
      air_range.css("backgroundSize","60% 100%");
      break;
    case '4':
      air_range.css("backgroundSize","80% 100%");
      break;
    case '5':
      air_range.css("backgroundSize","100% 100%");
      break;
    default:
      // console.log("there");
  }
},false);
//_______________________________________________________________________
 smoking_true = $('#smoking_true+label div');
 smoking_false = $('#smoking_false+label div');
 smoking_true[0].addEventListener('touchstart',function(){
   if(smoking_true[0].style.transform!=="scale(1)")
    {
      smoking_true[0].style.transform="scale(1)";
      smoking_true[0].style.transform="scale(2)";
    }
   else {
    smoking_true[0].style.transform="scale(2)";
    smoking_false[0].style.transform="scale(1)";
   }

 },false);
 smoking_false[0].addEventListener('touchstart',function(){
   if(smoking_false[0].style.transform!=="scale(1)")
    {
      smoking_false[0].style.transform="scale(1)";
      smoking_true[0].style.transform="scale(2)";
    }
   else {
     smoking_false[0].style.transform="scale(2)";
     smoking_true[0].style.transform="scale(1)";
   }
 },false);
 //________________________________________________________________________________
 let submit_button = $("#submit_button");
 let book_choose_img = $(".book_fu .book_choose_logo");
 let book_title = $(".book_fu p");
 let books = [];

 submit_button.click(function(){
   books=[];
   for (let i = 0; i < book_choose_img.length; i++) {
       if(book_choose_img[i].src.match("Group.png")){
        switch (book_title[i].innerHTML) {
          case '二次元':
            books.push(1);
            break;
          case '技术':
            books.push(2);
            break;
          case '科幻':
            books.push(3);
            break;
          case '恐怖':
            books.push(4);
            break;
          case '漫画':
            books.push(5);
            break;
          case '推理':
            books.push(6);
            break;
          case '网游':
            books.push(7);
            break;
          case '文学':
            books.push(8);
            break;
          case '武侠':
            books.push(9);
            break;
          case '玄幻':
            books.push(10);
            break;
          case '言情':
            books.push(11);
            break;
          default:
            break;

        }
     }
   }
   $.ajax({
     type:"post",
     url:"",
     data:{"school":$("input[name='school']").val(),
            "studentName":$("input[name='studentName']").val(),
            "studentID":$("input[name='studentID']").val(),
            "major":$("#major p").text(),
            "sex":$("input[name='sex']").val(),
            "southNorth":$("#n_o_s p").text(),
            "studentProvince":$("#province p").text(),
            "innerSensitivity":$("#information_range").val(),
            "sleepTime":$(".sleep_setTime2 p").text(),
            "wakeTime":$(".sleep_setTime1 p").text(),
            "sport":sport_value_detail,
            "sportWeight":$("#sport_range").val(),
            "novelType":books,
            "novelTypeWeight":$("#book_range").val(),
            "winterTemperature":$(".js-tem-cold").val(),
            "summerTemperature":$(".js-tem-hot").val(),
            "airWeight":$("input[name='air_range']").val(),
            "smoke":$("input[name='whether_smoke']").val(),
            "smokeWeight":$("input[name='smoking_range']").val(),},
     async:true,
     success:function(data){
       alert('提交成功');
       if(data.status==302)
        location.url = data.url;
     },
     error:function(XMLHttpRequest,textStatus,errorThrown){}
   });
 })
