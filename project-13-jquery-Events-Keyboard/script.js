$(function(){
    var counter = 0;
    $('input').focus(function(){
        $(this).css('background-color','yellow');
    })

    $('input').blur(function(){
        $(this).css('background-color','white');
    })
})