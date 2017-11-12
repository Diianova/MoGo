$(function(){

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
});
