$(document).ready(function()
{
    $("#hide").click(function(){
        //$("p").hide();
        //$("p").fadeOut(); // to hide with effect
        //$("p").fadeOut("slow");
        $("p").fadeOut(2000);
    });
    $("#show").click(function(){
       // $("p").fadeIn();  //to show with effect
       //$("p").fadeIn("slow");
       $("p").fadeIn(2000);
       // $("p").show();
       // $("p").html("Hi we are learning JQuery");
       // $("p").css({background:'blue',color:'white'});
        //$(this).css({color:'red'});
    });
    $("#headingHtml").click(function(){
       // $("#contentHtml").show();
       //$("#contentHtml").toggle();
       //$("#contentHtml").fadeToggle();
       //$("#contentHtml").slideDown();
       $("#contentHtml").slideToggle();

    });
    $("#sumbtn").click(function(){
        var num1 = parseInt($("#tnum1").val());
        var num2 = parseInt($("#tnum2").val());
        var result = num1 + num2;
        $("#output").html("Sum is: "+result);
        //$("#output").fadeIn(2000);
        $("#output").animate({left:'100px'});
       // $("#output").animate({right:'100px'});
       $(this).css({color:'red'});
       $("#output").css({backgroundColor:'red'});
    })

});