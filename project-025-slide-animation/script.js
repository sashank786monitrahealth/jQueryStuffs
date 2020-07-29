$(function(){
    $('.btn').css({
                    'border':'1px solid black',
                    'padding':'10px',
                    'width':'150px'
                  }).click(function(){
              if( $(this).index() == 1){
                  $('#output2').slideUp(5000);
              };
    })
})