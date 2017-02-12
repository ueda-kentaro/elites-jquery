$(function(){
   $('.tab-content').hide();
   $('#tab1').show();
   $('.tab > li').click(function(){
       $('.tab > li').removeClass('active');
       $('.tab-content').hide();
       $(this).addClass('active');
       var target = $(this).data('target');
       $('#' + target).show();
   });
});