$(function() {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    autoplay: true,
    autoplaySpeed: 4000,
  });  
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
  }); 


  $(function(){
    // li要素の最後にdiv要素を追加
    $(".item").append("<div></div>");

    // // div要素内に画像のキャプションを追加
    $(".item div").each(function(){
      $(this).html("<p>" + $(this).parent().children("img").attr("alt") + "</p>");
    });

    // // li要素をマウスオーバー
    $(".item").hover(function(){
      // キャプション部分の表示：フェードイン
      $(this).children("div").stop().fadeIn(300);

      // キャプションのテキスト位置：10pxから0pxへ移動
      $(this).children("div").children("p").stop().animate({"top" : 0}, 300);
    }, function(){
      // キャプション部分の非表示：フェードアウト
      $(this).children("div").stop().fadeOut(300);
      // console.log(this)

      // キャプションのテキスト位置：0pxから10pxへ移動
      $(this).children("div").children("p").stop().animate({"top":"10px"}, 300);
    });
  });
});

