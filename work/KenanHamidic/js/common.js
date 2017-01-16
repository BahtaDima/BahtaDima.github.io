$(function() {



 $(document).ready(function() {
  $('.main-touch-menu').click(function() {
    $('.main-nav').slideToggle(800);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 768 ) {			
			$('.main-nav').removeAttr('style');
		 }
	});//end resize
});//end ready


	$(".main-nav").animated("fadeInDown", "fadeOutUp");
	$("h2, p").animated("fadeInDown", "fadeOutUp");
	$("h1").animated("fadeInDown", "fadeOutUp");
	$(".content-img-bg").animated("fadeInDown", "fadeOutUp");
	$(".main-header-text p").animated("fadeInUp", "fadeOutDown");
	$(".main-header-button").animated("fadeInUp", "fadeOutDown");
	$(".content-text-left").animated("fadeInLeft", "fadeOutLeft");
	$(".content-text-right").animated("fadeInRight", "fadeOutRight");
	$(".team-people").animated("flipInY", "fadeOutDown");


	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
