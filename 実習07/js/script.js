$(function(){
   $("#thum a").click(function(){
    //   $("#main img").attr("src",(this).attr("href"));
    $("#main img").before("<img src='"+$(this).attr("href")+"' alt=''>");
    $("#main img:last").fadeOut("fast", function(){
       $(this).remove(); 
    });
    return false;
   });
});