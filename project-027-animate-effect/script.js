$(function(){

    $('.btn').css({'border':'1px solid black', 
                   'padding':'10px',
                   'width':'150px'
                  });

    $('.btn').first().click(
        function(){
            $('#output1').animate({
                "padding":"20px",
                "fontSize":"75px"
            })
            console.log('first');
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