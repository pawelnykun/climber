$(function() {
	//scrollTo#
	$('a').click(function() {
		var href = $(this).attr("href");
    	$('html, body').animate({
      		scrollTop: $(href).offset().top
    	}, 500);
    return false;
	});

	//scrollTopButton
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$('.scrollTopButton').addClass('show');
		} else {
			$('.scrollTopButton').removeClass('show');
		}
	});
 
	$('.scrollTopButton').click(function() {
		$('html, body').animate({scrollTop: 0}, 400, 'linear');
	});

	//numbersEffect
  	var counterInitialized = false;
  	$(window).scroll(function() {
	  	var pxFromTop = $(".numbers").offset().top;
	  	if ( ($(document).scrollTop() > pxFromTop - 700) && (!counterInitialized) ) {
	  		counterInitialized = true;

            $('.number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
	});
});