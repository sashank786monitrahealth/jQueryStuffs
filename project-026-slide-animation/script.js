$(function(){
    $('.btn').css({
                    'border':'1px solid black',
                    'padding':'10px',
                    'width':'150px'
                  }).click(function(){
              if( $(this).index() == 1){
                  $('#output2').fadeIn(5000, function(){
                      console.log("fading in");
                  });
              };

              if($(this).index() == 2){
                  $('#output2').fadeOut(5000, function(){
                      console.log("fading out")
                  });
              }

              if($(this).index() == 3){
                  $('#output3').fadeToggle(3000,function(){
                      console.log("fade toggle")
                  });
              }
    })
})