$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};



		$(".cards_sec .block").waypoint(function() {
		$(".card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 400*index);
		});
	}, {
		offset : "30%"
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



$(function() {

	$(".toggle_mnu").click(function() {
			$(".sandwich").toggleClass("active");
			$('body').toggleClass('over');
	});



	$(".toggle_mnu").click(function() {
			if ($(".top_mnu_wrap").is(":visible")) {
					$(".top_text").css("opacity", "1");
					$(".top_mnu_wrap").fadeOut(600);
					$(".top_mnu li a").removeClass("fadeInUp animated");

			} else {
					$(".top_text").css("opacity", ".1");
					$(".top_mnu_wrap").fadeIn(600);
						$(body).toggleClass('overlay');
					$(".top_mnu li a").addClass("fadeInUp animated");
			};
	});

});



	$(".scroll_top").click(function() {
		$("html, body").animate({ scrollTop: $(".main_foot").height()-5000 }, "slow");
		return false;
	});

var BrandSlide = $('.brands_slider').owlCarousel({
      nav: true,
      navText : "",
      items:5,
			responsive : {
			    0 : {
			    	items:1,
			    	center: false,
 			    	autoWidth:false,
 			    	loop: false

			    },
			    768 :{
			    	items: 3,
			    	center: true,
			    	loop:true

			    },
			    1200 : {
			    	items:4
			    }		,
			    1440 : {
			    	items: 5
			    }
			}

});
	function set_owl_center() {
    BrandSlide.find( ".active" ).removeClass('owl-center');
    setTimeout(function(){
      BrandSlide.find( ".active" ).each(function( i ) {
        if(i==1) $(this).addClass('owl-center');
      });
    }, 80);
}
set_owl_center(); // Init center
BrandSlide.on('changed.owl.carousel', function(event) {set_owl_center();}) 
var faceSlide =	$('.facebook_slider').owlCarousel({
      nav: true,
      navText : "",
      items: 1,


			responsive : {
			    
			}

});
		$('.face_prev').click(function() {
		faceSlide.trigger('prev.owl.carousel');
	});

	$('.face_next').click(function() {
		faceSlide.trigger('next.owl.carousel');
	});






/*fancybox*/
$(function() {
	$(".js-q-fancybox").fancybox({
		protect: true,
		buttons : [
			'zoom',
			'thumbs',
			'close'
		]
	})
	});

$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});







