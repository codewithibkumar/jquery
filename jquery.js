$(document).ready(function(){

    $("#show").click(function(){
       // $("p").show();
       //$("p").fadeIn();
      // $("p").fadeIn("slow");
       $("p").fadeIn(2000);
    });
   
    $("#hide").click(function(){
        //$("p").hide();
       // $("p").fadeOut();
        $("p").fadeOut(2000);
    });
    $("#show-hide").click(function(){
        $("p").fadeToggle(2000);
    });

    $("#headinghtml").click(function(){
       // $("#slidecontenthtml").slideDown();
       $("#slidecontenthtml").slideToggle();
    });

    $("#headingcss").click(function(){
        $("#slidecontentcss").slideToggle();
    });
    $("#magicbtn").click(function(){
        $("#magicbox").animate({left:'300px'});
    });
});