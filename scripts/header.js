$('ul li a').click(function(){
    $('ul li a').removeClass('checked');
    $(this).addClass('checked');
});

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

});
function clickOn() {
    if ( $(window).width() < 800 ) {
        $('header ul').slideToggle(400);
    }
}