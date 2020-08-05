$(function(){
    $('#output1').css({'position':'relative'});
    $('.btn').css({'border':'1px solid black', 
                   'padding':'10px',
                   'width':'150px'
                  });

    $('.btn').first().click(
        function(){
            $('#output1').animate({
                "left":"+=50px",
                "top":"+=50px"
            }, 5000)
            console.log('first');
        }
    )


    $('.btn:eq(1)').click(
        function(){
            $('#output1').animate({
                "left":"-=50px",
                "top":"-=50px"
            }, 5000)
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
            //console.log('last');
            $('#output2').animate({
                height:'toggle'
            },'slow')
        }
    )


})