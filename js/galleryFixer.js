
  $(document).ready(function(){
     var $list = $('#lightgallery li');
     for (var i = 0; i < $list.length; i++) {
          var  $listLi = $list[i];
          var $imgPath = $($listLi).children('a').children('img').attr('src');
          $($listLi).attr('data-src',$imgPath);
        }
  });


/*$(document).ready(function(){
  $("#animated-thumbnials a").mouseover(function(){
        $(this).children("div").fadeIn();
  });
  $("#animated-thumbnials a").mouseleave(function(){
        $(this).children("div").css("display","none");;
  });
});
*/
