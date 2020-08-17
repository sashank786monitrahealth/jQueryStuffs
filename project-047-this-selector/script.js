$(function(){
    $('button').click(
        function(){
            $(this).css('background-color','dodgerblue');
        }
    );

    $('p').mouseover(
        function(){
            $(this).css('background-color','gold');
        }
    ).mouseout(function(){
        $(this).css('background-color','white');
    });

    $('li').mouseover(
        function(){
            $(this).css('background-color','violet');
        }
    ).mouseout(function(){
        $(this).css('background-color','white');
    });
})