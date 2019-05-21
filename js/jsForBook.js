let book_button = $(".book_button");
let book_main_photo = $(".book_main_photo");
let book_p = $(".book_fu p");
let book = $(".game");
book_button[0].addEventListener('touchstart',function(){
  book.hide(500);
  smoking.show(500);
},false);
let book_range = $("#book_range");
book_range[0].addEventListener("change",function(){
    switch (book_range.val()) {
      case '0':
        book_range.css("backgroundSize","0% 100%");
        break;
      case '1':
        book_range.css("backgroundSize","20% 100%");
        break;
      case '2':
        book_range.css("backgroundSize","40% 100%");
        break;
      case '3':
        book_range.css("backgroundSize","60% 100%");
        break;
      case '4':
        book_range.css("backgroundSize","80% 100%");
        break;
      case '5':
        book_range.css("backgroundSize","100% 100%");
        break;
      default:

    }
},false)
//________________________________________________________________________________
let book_fu = $(".book_fu");
let book_fu_logo = $('.book_fu .book_choose_logo');
for(let i = 0; i < book_fu_logo.length;i++){
  book_fu_logo[i].addEventListener('touchstart',function(){
        if(book_fu_logo[i].src.match("Group108.png")){
            book_fu_logo[i].src = "img/%E4%B9%A6%E7%B1%8D/Group.png";
            book_main_photo[0].style.backgroundImage = "url(img/书籍/"+book_p[i].innerHTML+".png";
        }
        else{
          book_fu_logo[i].src = "img/%E4%B9%A6%E7%B1%8D/Group108.png";
        }
  },false);
}
//________________________________________________________________________________
