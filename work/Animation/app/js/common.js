$(function() {

	// Пользовательские функции
	
	$('.filter-item-wrap').mixItUp();

	$(".filter-button").on("click", "li", function(){
	$(".filter-button li").removeClass("active"); //удаляем класс во всех вкладках
	$(this).addClass("active"); //добавляем класс текущей (нажатой)
});

	$(".menu a, .logo").mPageScroll2id({
		offset: 0,
		scrollSpeed: 800
	});

	$('.popup-wrap').magnificPopup({
		type:'image',
	});


$(".menu").on("click", "li", function(){
	$(".menu li").removeClass("active"); //удаляем класс во всех вкладках
	$(this).addClass("active"); //добавляем класс текущей (нажатой)
});

	
	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
	});


	$('.btn_mnu').click(function(){
		$('.menu').toggleClass("active");
	});

	

/*ANIMATION*/
/*section1 hove*/
$(".header-content-text h1 ").animated("fadeInDown", "fadeOutDown");
$(".menu").animated("fadeInDown");
$(".logo").animated("fadeInDown", "fadeOutDown");
/*section2 services*/
$(".text-section h2").animated("fadeInUp", "fadeOutDown");
$(".text-section p").animated("fadeInUp", "fadeOutDown");
$(".services-item-content").animated("fadeInDown", "fadeInLeft");
/*section3 about*/
$(".team-baner").animated("fadeInUp", "fadeOutDown");
$(".team-item-content").animated("fadeInDown", "fadeInRight");
/*section4 work*/
$(".work-filter-wraper h3").animated("fadeInLeft", "fadeInRight");
$(".filter-button ").animated("fadeInRight", "fadeInLeft");
$(".animation_gallery ").animated("fadeInRight", "fadeInLeft");
$(".animation_gallery1 ").animated("fadeInLeft", "fadeInRight");
/*section5 contact */
$(".contact-info h3").animated("fadeInUp", "fadeOutDown");
$(".contact-info p").animated("fadeInUp", "fadeOutDown");
$(".contact-info span").animated("fadeInUp", "fadeOutDown");
$(".contact-info img").animated("fadeInUp", "fadeOutDown");
$(".contact-info__file").animated("fadeInUp", "fadeOutDown");
$(".form").animated("fadeInUp", "fadeOutDown");


});