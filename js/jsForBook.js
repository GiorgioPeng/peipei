let book_button = $(".book_button");
let book_main_photo = $(".book_main_photo");
let book_p = $(".book_fu p");
let book = $(".game");
book_button[0].addEventListener('touchstart',function(){
  book[0].style.display="none";
  smoking[0].style.display="block";
},false);
let book_range = $("#book_range");
book_range[0].addEventListener("change",function(){
    switch (book_range[0].value) {
      case '0':
        book_range[0].style.backgroundSize="0% 100%";
        break;
      case '1':
        book_range[0].style.backgroundSize="20% 100%";
        break;
      case '2':
        book_range[0].style.backgroundSize="40% 100%";
        break;
      case '3':
        book_range[0].style.backgroundSize="60% 100%";
        break;
      case '4':
        book_range[0].style.backgroundSize="80% 100%";
        break;
      case '5':
        book_range[0].style.backgroundSize="100% 100%";
        break;
      default:

    }
},false)
//________________________________________________________________________________
let book_fu = $(".book_fu");
let book_fu_logo = $('.book_fu img');
for(let i = 0; i < 22;i++)
{
  book_fu_logo[i].addEventListener('touchstart',function(){
        if(book_fu_logo[i].src.match("Group108.png") && i%2 == 0)
          {
            book_fu_logo[i].src = "img/%E4%B9%A6%E7%B1%8D/Group.png";
            book_main_photo[0].style.backgroundImage = "url(img/书籍/"+book_p[i/2].innerHTML+".png";
          }
        else{
          if(i%2 == 0)
          book_fu_logo[i].src = "img/%E4%B9%A6%E7%B1%8D/Group108.png";
        }
  },false);
}
