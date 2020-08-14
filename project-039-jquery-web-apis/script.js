$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
      var url = "http://api.icndb.com/jokes/random/1";
      $.getJSON(url, function(data){
          console.log(data.value[0]);
          $('#output1').html(data.value[0].joke);
      });
    })


    $('.btn-2').click(function(e){
  
    })


    $('.btn-3').click(function(e){
  
    })






})