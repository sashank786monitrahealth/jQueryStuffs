$(function(){

    $('img').css({width:'50px',height:'50px'});

    $('.highlight').mouseleave(function(){
       $(this).height('80px');
    }).mouseenter(function(){
        $(this).height('40px');
    })

})