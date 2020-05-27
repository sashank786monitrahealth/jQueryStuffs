$(document).ready(function(){
    $('button').click(function(){
        validateMe();
    })


    function validateMe(){
      console.log("validate me");
     
      var error = [];
      //console.log($('#myForm input'));
      // grabs each element and allows us to loop through it
      $('#myForm input').each(function(){
          if ($(this).val().length > 4){
            console.log($(this).attr("name"))
        } else {
            error.push($(this).attr("name"));
        }
      })
      if (error.length == 0){ $('#myForm').submit(); }
    };

})

