//$(document).ready(function(){
//	$('nav a,footer a.up').click(function(e){
//										  
//		// If a link has been clicked, scroll the page to the link's hash target:
//		
//		$.scrollTo( this.hash || 0, 1500);
//		e.preventDefault();
//	});
//
//});

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1500);
    }

});