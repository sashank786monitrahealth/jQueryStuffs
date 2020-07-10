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
          newtext += e.key;
          $('.highlight').text(newtext);
    })
    $('input').keydown(function(e){
        $(this).css('color','red');
    })
    $('input').keyup(function(){
        $(this).css('color','dodgerblue');
    })
})