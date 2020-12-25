$(document).ready(function () {
  $("#logo").click(function () {
    if (!$("#logo").hasClass('logo-animate')) {
      $(this).toggleClass('logo-animate');
      $(".cover").fadeIn(ui.easeSpeed);
      $(".page-1").fadeIn(ui.easeSpeed);
    } else {
      $(".page").each(function(){
        $(this).fadeOut(ui.easeSpeed);
      });
      $(".cover").fadeOut(ui.easeSpeed);
      $("#logo").toggleClass('logo-animate');
    }
  });

  $(".btn-page").click(function () {
    if ('undefined' !== typeof $(this).data('prevPage')) {
      var n = $(this).data('actuPage');
      var t = $(this).data('prevPage');
      $(".page-"+n).fadeOut(ui.easeSpeed);
      $(".page-"+t).fadeIn(ui.easeSpeed);
    } else {
      var n = $(this).data('actuPage');
      var t = $(this).data('nextPage');
      if ("0" == t) {
        $(".page").each(function(){
          $(this).fadeOut(ui.easeSpeed);
        });
        $(".cover").fadeOut(ui.easeSpeed);
        $("#logo").toggleClass('logo-animate');
      } else {
        $(".page-"+n).fadeOut(ui.easeSpeed);
        $(".page-"+t).fadeIn(ui.easeSpeed);
      }
    }
  });
});
