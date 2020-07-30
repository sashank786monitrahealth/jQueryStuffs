$(function(){
    $('.btn').css({
                    'border':'1px solid black',
                    'padding':'10px',
                    'width':'150px'
                  }).click(function(){
              if( $(this).index() == 1){
                  $('#output2').fadeIn(1000,function(){
                      console.log("fast")
                  });
              };

              if($(this).index() == 2){
                  $('#output2').fadeTo(5000,0.5, function(){
                      console.log("Faded to 50%")
                });
              }

              if($(this).index() == 3){
                  $('#output3').fadeToggle(3000,function(){
                      console.log("fade toggle")
                  });
              }
    });

    $('.highlight').click(function(){
        $(this).fadeOut();
    }
    )
})