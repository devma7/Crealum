

$(document).ready(function(){
  $(this).scroll(function(){
    var y = $(this).scrollTop();
    var showPosition = 400;
    if (y> showPosition) {
      $(".top").show();
    }else {
      $(".top").hide();
    }
  });
  $(".top").click(function(){
    $("html,body").animate({scrollTop:0},1500);
  });

});
// WOW initialisation
  new WOW().init();
  // Hook up slide show
    $(".rslides").responsiveSlides();
