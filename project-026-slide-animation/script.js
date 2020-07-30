$(function(){
    $('.btn').css({
                    'border':'1px solid black',
                    'padding':'10px',
                    'width':'150px'
                  }).click(function(){
              if( $(this).index() == 1){
                  $('#output2').slideUp(5000, function(){
                      console.log("slide up read");
                  });
              };

              if($(this).index() == 2){
                  $('#output2').slideDown(5000);
              }

              if($(this).index() == 3){
                  $('#output3').slideToggle(3000);
              }
    })
})