$(function(){
    var newtext = "";
    
    $('input').focus(function(){
        $(this).css('background-color','yellow');
    })

    $('input').blur(function(){
        $(this).css('background-color','white');
    })
    $('input').keypress(function(e){
          console.log(e.key);
    })
})