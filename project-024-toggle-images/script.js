$(function(){

    $('img').css({width:'50px',height:'50px'});

    $('.highlight').mouseleave(function(){
       //$(this).height('80px');
       $(this).css({"background-color":"white"})
    }).mouseenter(function(){
        //$(this).height('40px');
        $(this).css({"background-color":"lime"})
    })

    $('#wrapper > div').click(function(){
        $(this).children().toggle();
    })

})