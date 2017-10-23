// отсчет цифр

$(document).ready(function(){
	
    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;
        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top; 
        var w_height = $(window).height();
        var d_height = $(document).height();
        var e_height = $(countbox).outerHeight();
 
        if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 3000,

            });
 
            show = false;
        }
    });
});


//адаптивное меню

$(document).ready(function(){
	var touch = $('#toggle-nav');
	var menu = $('.main-menu__list');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if(wid > 768 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});

});


// фиксация меню
$(document).ready(function(){

        var $menu = $(".header__nav");

        $(window).scroll(function(){
            if ( $(this).scrollTop() > 150 ){
                $menu.addClass("fixed");
            } else if($(this).scrollTop() <= 150 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed");
            }
        });
    });


// для отображения svg
$(document).ready(function () {
    svg4everybody({});
});


$(document).ready(function() {
    $('.fancybox-media').fancybox({
        openEffect  : 'none',
        closeEffect : 'none',
        helpers : {
            media : {}
        }
    });
});