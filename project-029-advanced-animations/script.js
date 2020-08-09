$(function(){
    $('#output1').css({'position':'relative'});
    $('#output2').css({'position':'relative'});
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
            }, option).animate({
                left:100,
                top:70,
                opacity:"toggle"
            },option).animate({
                left:150,
                top:120,
                opacity:"toggle"
            },option);

        }
    )


    $('.btn:eq(1)').click(  function(){
            console.log(".btn:eq(1)");
            $('#output2').animate({
                left:'+=50'
            },{
                duration:1000,
                step:function(now,fx){
                    console.log('left: '+now,fx);
                    $(this).css('transform','rotate('+now+'deg)')
                }
            }).animate({
                left:'+=50'
            },{
                duration:2000,
                step:function(now,fx){
                    console.log('left: '+now,fx);
                    $(this).css('transform','rotate('+now+'deg)')
                }
            });
        }
    )
    $('.btn').last().click(
        function(){
            console.log('last');
            
        }
    )


})