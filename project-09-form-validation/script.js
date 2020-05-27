$(document).ready(function(){
    $('button').click(function(){
        validateMe();
    })


    function validateMe(){
      console.log("validate me");
     
      var okay = false;
      //console.log($('#myForm input'));
      // grabs each element and allows us to loop through it
      $('#myForm input').each(function(){
          console.log($(this).val())
      })
      if (okay){ $('#myForm').submit(); }
    };

})

