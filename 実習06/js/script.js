$(function(){
    $('.slide-content').hide();
    $('.slide').click(function(){
        $('.slide-content').slideUp();
        $(this).next().slideDown();
    });
});