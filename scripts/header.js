$('ul li a').click(function(){
    $('ul li a').removeClass('checked');
    $(this).addClass('checked');
});