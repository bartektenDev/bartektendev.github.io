(function($) {
    "use strict";

    var tpj = jQuery;
    var revapi24;
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


    // on ready function
    jQuery(document).ready(function($) {



	 var xv_ww=$(window).width(),xv_slideshow=true;
    $(window).on('resize load', function() {
        xv_ww = $(window).width();
        if(xv_ww <= 767) {
            $('.responsive-menu').removeClass('xv-menuwrapper').addClass('dl-menuwrapper');
            $('.lg-submenu').addClass("dl-submenu");
        } else {
            $('.responsive-menu').removeClass('dl-menuwrapper').addClass('xv-menuwrapper');
            $('.lg-submenu').removeClass("dl-submenu");
        }
    });
    $('#dl-menu').dlmenu({
        animationClasses: {
            classin: 'dl-animate-in-5',
            classout: 'dl-animate-out-5'
        }
    });
	
	
	// Menu js for Position fixed
        $(window).scroll(function() {
            var window_top = $(window).scrollTop() + 1;
            if (window_top > 160) {
                $('.prs_navigation_main_wrapper').addClass('menu_fixed animated fadeInDown');
            } else {
                $('.prs_navigation_main_wrapper').removeClass('menu_fixed animated fadeInDown');
            }
        });
	
	 // ===== Scroll to Top ==== 
        $(window).scroll(function() {
            if ($(this).scrollTop() >= 100) {
                $('#return-to-top').fadeIn(200);
            } else {
                $('#return-to-top').fadeOut(200);
            }
        });
        $('#return-to-top').on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
        });
	
	
	/*--------------------------
nice Select active
---------------------------- */ 
	$('select').niceSelect();
       
	   
	 

	// Featured Products Js
	$('.prs_upcom_slider_slides_wrapper .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		autoplay:false,
		smartSpeed: 1200,
		navText:["<i class='flaticon-left-arrow'></i>" , "<i class='flaticon-right-arrow'></i>"],
		dots:false,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	
	 $(document).ready(function() {
            $('.prs_feature_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 2,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
		 $(document).ready(function() {
            $('.prs_es_speak_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		 $(document).ready(function() {
            $('.prs_vp_center_slider .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
	
	
	
	$(document).ready(function() {
            $('.prs_ms_trailer_slider_left_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 1,
                        nav: true
                    },
                    700: {
                        items: 1,
                        nav: true
                    },
                    1000: {
                        items: 1,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
		
		
		
		$(document).ready(function() {
            $('.prs_ms_scene_slider_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
	
	 $(document).ready(function() {
            $('.prs_pn_slider_wraper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-play-button"></i>', '<i class="flaticon-play-button"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 3,
                        nav: true
                    },
                    700: {
                        items: 4,
                        nav: true
                    },
                    1000: {
                        items: 6,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })
	

	$(".album-slider").bxSlider({
		minSlides: 1,
		maxSlides: 10,
		slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 20000,
		useCSS: false, 
		infiniteLoop: false
		
		});
		
		
		$(".prs_vp_left_slider").bxSlider({
		minSlides: 1,
		autoDirection: 'next',
		mode: 'vertical',
		maxSlides: 10,
		slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 15000,
		useCSS: false, 
		infiniteLoop: false
		
		});
		
		$(".prs_vp_right_slider").bxSlider({
		minSlides: 1,
		mode: 'vertical',
		autoDirection: 'prev',
		maxSlides: 10,
		slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 15000,
		useCSS: false, 
		infiniteLoop: false
		
		});
		
		
		/* 09. VENOBOX JS */
            $('.venobox').venobox({
                numeratio: true,
                titleattr: 'data-title',
                titlePosition: 'top',
                spinner: 'wandering-cubes',
                spinColor: '#007bff'
            });


	
				// Magnific popup-video

	$('.test-popup-link').magnificPopup({ 
    type: 'iframe',
    iframe: {
        markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '<div class="mfp-title">Some caption</div>'+
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/', 
                id: 'v=',
                src: 'https://www.youtube.com/embed/ryzOXAO0Ss0'
            }
        }
    }
    // other options
});

	
	 $('.second-nav-toggler').on('click', function(e) {
        e.preventDefault();
        var mask = '<div class="mask-overlay">';

        $('body').toggleClass('active');
        $(mask).hide().appendTo('body').fadeIn('fast');
        $('.mask-overlay, .manu-close').on('click', function() {
            $('body').removeClass('active');
            $('.mask-overlay').remove();
        });
    });
	
	
			//show hide login form js
	$('#search_button').on("click", function(e) {
		$('#search_open').slideToggle();
		e.stopPropagation(); 
	});

	$(document).on("click", function(e){
		if(!(e.target.closest('#search_open'))){	
			$("#search_open").slideUp();   		
		}
   });
	
		
	

//  SLICK SLIDER
//  https://kenwheeler.github.io/slick/

//  Parent Video Slider
$(".video-container").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: ".video-thumbnails"
});

//  Child Thumbnail Slider
$(".video-thumbnails").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".video-container",
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 2
      }
    }
  ]
});

//  Video Poster Setup
//  FORKED FROM CRAIG MONEY 
//  https://codepen.io/pixelthing/details/zGZKaQ

$(document).on("click", ".js-videoPoster", function(ev) {
  "use strict";
  ev.preventDefault();
  videoStop();
  var $poster = $(this);
  var $wrapper = $poster.closest(".js-videoWrapper");
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  "use strict";
  var $iframe = $wrapper.find(".js-videoIframe");
  var src = $iframe.data("src");
  // hide poster
  $wrapper.addClass("videoWrapperActive");
  // add iframe src in, starting the video
  $iframe.attr("src", src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  "use strict";
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $(".js-videoWrapper");
    var $iframe = $(".js-videoIframe");
    // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find(".js-videoIframe");
  }
  // reveal poster
  $wrapper.removeClass("videoWrapperActive");
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr("src", "");
}

// On before slide change
$(".video-container").on("beforeChange", function(
  event,
  slick,
  currentSlide,
  nextSlide
) {
  videoStop();
});

$(function() {
    $('.no-fouc').removeClass('no-fouc');
    
});



	
    });

})(jQuery);