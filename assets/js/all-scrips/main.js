$(document).ready(function(){
	//categories-menu
	$('.btn-cat').hover(function(){
		$('.btn-cat i').toggleClass("effect")
	})
	$(".cat-btn-inner").slideUp();

	$(".btn-cat").click(function(){
		$(".cat-btn-inner").slideToggle(1000);
	});

	//woocommarce-mini-card

	$('.woocommarce-mini-card').hover(function(){
		$('.shoping-card a i').toggleClass("effect")
	})

	//menu-toggle close-nav
	$(".nav-expander").click(function(){
		$(".menu-toggle").addClass('action');
	});

	$("span#close-nav").click(function(){
		$(".menu-toggle.action").removeClass('action');
	});


	

	//mobile manu
	$('#mobile-menu').slicknav({
		'label' : '',
		'prependTo': '.mobile-icon',
		'closedSymbol': '<button><i class="fas fa-chevron-down"></i></button>', // Character after collapsed parents.
		'openedSymbol': '<button><i class="fas fa-chevron-up"></i></button>' // Character after expanded parents.
		
	});


	//hero active
	$('.hero-active').slick({
		dots: false,
		accessibility:true,
		autoplay:true,
		autoplaySpeed:5000,
		infinite: true,
		arrows:true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });
    
	  //counter
	  $('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	//videos

	$('.video-pupap').magnificPopup({
		type: 'iframe',
		// other options
		iframe: {
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				id: 'v=', 
		  
				src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }
		  
			  // you may add here more sources
		  
			},
		  
			srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		  }
	  });

	//partner-active
	$('.partner-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});

 	//blog-active
	 $('.blog-active').slick({
		dots: false,
		accessibility:true,
		autoplay:false,
		autoplaySpeed:5000,
		infinite: true,
		arrows:false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			},
			{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			}
		]
	});
    /*
	//selector
	$('select').niceSelect();
    */

   /*
	// videos play
	$('#videos-play').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				id: 'v=', 
		  
				src: 'http://www.youtube.com/embed/%id%?autoplay=1'
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }
			},
		  
			srcAction: 'iframe_src', 
		  }
	});
	*/

    /*

	//contact-loging
	$("#submit").click(function(e){
        var inValid = true;
        $("input[type='text']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='email']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        $("input[type='number']#requered").each(function(){
            if($(this).val()==''){
                inValid = false;
                $(this).css({
                    "border":"1px solid #d9485b",
                    "background":''
                });
            }else{
                $(this).css({
                    "border":"",
                    "background":''
                });
            }
        });
        if(inValid == false){
            e.preventDefault();
        }else{
            clear();
            document.getElementById("reply") .innerHTML = "thank fon senting message dear";
            return false;
        }
    });

    //costomar function

    function clear(){
        $('#myaction :input').each(function(){
            $(this).val('');
        });
    }

    */

 
	
    // scroll-top
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ) {
			$('#scroll').addClass('scroll-top');

		} else {
			$('#scroll').removeClass('scroll-top');
		}
	});

	$('#scroll').click(function(){
		$('html, body').animate({
			scrollTop:0
		},300);
	});
  

 
	//menu-stacky

	$(window).on('scroll', function(){
		if($(window).scrollTop() > 300){
			$('.main-header').addClass('stacky');
		}
		else{
			$('.main-header').removeClass('stacky');
		}
	})

	//mobile-menu
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 200){
			$('.slicknav_menu').addClass('stacky');
		}
		else{
			$('.slicknav_menu').removeClass('stacky');
		}
	})
  


});
/*
//preload-active
$(window).on('load', function(){
	$('.preload-area').fadeOut()
});
*/

	
