$(function(){

  //Scroll effects
  var links = $('.js-menu-list .js-menu-link');

  links.on('click', function(e){
    e.preventDefault();

    var selector = $(this).attr('href');
    var h = $(selector);

    $('html, body').animate({
      scrollTop: h.offset().top
    }, 500);

  });

	//Humburger menu
  	var menuBtn = $('.js-menu-bnt');
  	var menuBtnIcon = $('.js-menu-btn-icon');
  	var menuList = $('.js-menu-list');
  	var menu = $('.js-menu');

	menuBtn.on('click', function(){
		menuList.toggleClass('menu_show');
	    menuBtnIcon.toggleClass('menu-bnt__icon_show');
	    menu.toggleClass('header__items_bg');
	});

	//Accordion
	$('.js-service-about').eq(0).show();
	$('.js-service-icon').eq(0).addClass('icon-up-open-big');

    $('.js-service').on('click', function(){
        var aboutThisService = $(this).next();

        $('.js-service-about:visible').not(aboutThisService).slideUp(500);
        aboutThisService.slideDown(500);

        $('.js-service-icon').removeClass('icon-up-open-big');
        $(this).find('.js-service-icon').addClass('icon-up-open-big');
    });

  //Back to top button
  var backToTopBtn = $('.js-back-top');

 	backToTopBtn.on('click', function(e){
	    $('html, body').animate({
	      	scrollTop: 0}, 500);
	      	e.preventDefault();
  	});

  	$(window).on('scroll', function(){
	    var height = $(this).height();
	    var top = $(this).scrollTop();

	    if(top > 325){
	      	if(!backToTopBtn.is(':visible')){
	        	backToTopBtn.show();
	      	}
	    }else{
	      	backToTopBtn.hide();
	    }
  	});

    //Slider for the main banner
    var mainBanner = $('.header');
    var mainBannerImgs = ["mb-img1.jpeg", "mb-img2.jpeg", "mb-img3.jpeg", "mb-img0.jpeg"];
    var index = 0;

    function newImage(){
        mainBanner.css('background-image', 'url("img/'+mainBannerImgs[index]+'")');
        index++;
        console.log(index);
        if(index == mainBannerImgs.length){
            index = 0;
        }
    }
    setInterval(newImage, 5000);
});
