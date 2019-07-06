$(function(){
  /* footerの位置を一番下に固定 */
  $(window).on("load",function(){
    let pageHeight = $(document).height();
    $(".foot").css('top', pageHeight);
  })

  const head = $(".head");
  const logo = $(".head__logo");
  const topNav = $(".head-inner__topNav");
  const glNav = $(".head__nav");
  const searchBox = $(".search p");
  const btnSearchIcon = $(".search button img");
  const aboutIcon = $(".aboutme img");
  const snsIcon = $(".snslist img");

  /* 画像urlに-fixを追加する関数 */
  function fixImgSrc(normalImg){
    let fixImgSrc = normalImg.attr("src").split(".")[0] + "-fix.svg";
    normalImg.attr("src", fixImgSrc);
  }
  /* 画像urlから-fixを削除する関数 */
  function returnImgSrc(fixImg){
    let normalImgSrc = fixImg.attr("src").replace(/-fix/g, "");
    fixImg.attr("src", normalImgSrc);
  }

  $(window).on("scroll",function(){
    let scrollTop = $(window).scrollTop();
    /* スクロール値が180以上であれば、headerをfixedバージョンにする */
    if(scrollTop >= 120){
      if(head.hasClass("fix-on")){
        return false;
      }
      head.addClass("fix-on");
      logo.addClass("fix-on");
      topNav.addClass("fl-just-between");
      glNav.addClass("fix-on");
      searchBox.addClass("fix-on");
      fixImgSrc(btnSearchIcon);
      fixImgSrc(aboutIcon);
      fixImgSrc(snsIcon.eq(0));
      fixImgSrc(snsIcon.eq(1));   
    }
    else{
      if (!head.hasClass("fix-on")) {
        return false;
      }
      head.removeClass("fix-on");
      logo.removeClass("fix-on");
      topNav.removeClass("fl-just-between");
      glNav.removeClass("fix-on");
      searchBox.removeClass("fix-on");
      returnImgSrc(btnSearchIcon);
      returnImgSrc(aboutIcon);
      returnImgSrc(snsIcon.eq(0));
      returnImgSrc(snsIcon.eq(1));   
    }
  })
})