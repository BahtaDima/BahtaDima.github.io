$(function() {

	$("body").niceScroll({
	horizrailenabled : false
});


	 $('img.img-svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
      }
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });


  $(".top_header h1").animated("fadeInDown", "fadeOutDown");
  $(".platform_text").animated("fadeInLeft", "fadeOutRight");
  $(".platform_img").animated("fadeInRight", "fadeOutRight");
  $(".some_item_wrap").animated("fadeInUp", "fadeOutDown");
  $(".anim").animated("fadeInUp", "fadeOutDown");
  $(".responsive_img").animated("fadeInLeft", "fadeOutRight");
  $(".responsive_text").animated("fadeInRight", "fadeOutRight");
  $(".comment_item_wrap img").animated("flipInX", "flipOutY");
  $(".comment_item_wrap p, span").animated("fadeInUp", "flipOutY");
  $(".bransr_wrap").animated("fadeInUp", "flipOutY");
  $(".img_browser").animated("fadeInLeft", "fadeOutRight");


  $(".top").mPageScroll2id({
    offset: 300,
    scrollSpeed: 1500
  });


  $('.header_button').click(function () {
      // ФУнкция плавного скрола при нажатии на елемент с классом .mouse-icon до елемента с классом .s-adv за 800секунд
      $('html, body').animate({
        scrollTop: $('.platforms').offset().top
      }, 1000);
    });

});
