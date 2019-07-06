$(function(){
  $(window).on("load",function(){
    let pageHeight = $(document).height();
    console.log(pageHeight);
    $(".foot").css('top', pageHeight);
  })
})