$(function(){
    $('.btn').css({
                    'border':'1px solid black',
                    'padding':'10px',
                    'width':'150px'
                  }).click(function(){
              if( $(this).index() == 1){
                  $('#output1').slideUp();
              };
    })
})