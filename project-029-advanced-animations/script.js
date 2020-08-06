$(function(){
    $('#output1').css({'position':'relative'});
    $('.btn').css({'border':'1px solid black', 
                   'padding':'10px',
                   'width':'150px'
                  });

    $('.btn').first().click(
        function(){
            console.log('first');
            var option = {duration:1000};

            $('#output1').animate({
                left:200,
                top:50
            }, option);
            
        }
    )


    $('.btn:eq(1)').click(
        function(){
            console.log('second');
        }
    )


    $('.btn:eq(2)').click(
        function(){
            console.log('third');
        }
    )
    $('.btn').last().click(
        function(){
            console.log('last');
            
        }
    )


})