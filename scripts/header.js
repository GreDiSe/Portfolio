$('.section_future_product_links a').click(function(){
    $('.section_future_product_links a').removeClass('prod_checked');
    $(this).addClass('prod_checked');
});

$('.team_links a').click(function(){
    $('.team_links a').removeClass('prod_checked');
    $(this).addClass('prod_checked');
});

$(document).ready(function() {
    $('.menu-trigger').click(clickOn);
    $('ul li a').click(clickOn);

    $(window).resize(function() {
        if ( $(window).width() > 800 ) {
            $('header ul').removeAttr('style');
        }
    });

    // Скролл
    $(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
            var top  = $(el).offset().top-100;
            var bottom = top +$(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('a.checked').removeClass('checked');
                $('a[href="#'+id+'"]').addClass('checked');

            }
        })
    });

    // Активная ссылка
    $(".nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
        // находим высоту, на которой расположен блок
        top = $(id).offset().top;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

});
function clickOn() {
    if ( $(window).width() < 800 ) {
        $('header ul').slideToggle(400);
    }
}
