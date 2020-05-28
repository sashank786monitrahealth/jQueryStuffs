$(document).ready(function(){
    $('button').click(function(){
        validateMe();
    })


    function validateMe(){
      $('label').css('color','black');

      console.log("validate me");
      var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var error = [];
      //console.log($('#myForm input'));
      // grabs each element and allows us to loop through it
      $('#myForm input').each(function(){
          var inputName = $(this).attr('name');
          if ($(this).val().length > 4){
            //console.log($(this).attr("name"));
            if(inputName == 'email' && !emailReg.test($(this).val())){
                console.log("invalid email");
            } 
        } else {
            error.push($(this).attr("name"));

        }
      })
      if (error.length == 0){ $('#myForm').submit(); }
      else {
          for(var x=0; x<error.length;x++){
              $('label[for="'+error[x]+'"]').css(
                  'color','red'
              )
          }
          console.log(error);
      }
    };

})

