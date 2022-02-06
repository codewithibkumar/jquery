$(document).ready(function(){
    $("#hide").click(function()
    {
       // $("p").fadeOut();
        $("p").fadeOut(2000);
    });
    $("#show").click(function()
    {
        //$("p").fadeIn();
       // $("p").fadeIn(2000);
       // $("p").fadeTo("slow", 0.15);
       $("p").fadeToggle(); //for hide and show
       $("#box2").animate({left:'350px'})
      
       
    });
    $("#box1").click(function(){
        //$("#sliderbox").slideDown();
        $("#sliderbox").slideToggle();
       // $("#sliderbox").slideUp();
      
    });
    

});