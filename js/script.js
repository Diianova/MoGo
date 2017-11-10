$(function(){

	// 	//Humburger menu
  	var menuBtn = $('.js-menu-bnt');
  	var menuBtnIcon = $('.js-menu-btn-icon');
  	var menuList = $('.js-menu-list');
  	var menu = $('.js-menu');

	menuBtn.on('click', function(){
		menuList.toggleClass('menu_show');
	    menuBtnIcon.toggleClass('menu-bnt__icon_show');
	    menu.toggleClass('header__items_bg');
	});


});
