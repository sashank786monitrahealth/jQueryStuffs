$(document).ready(function(){
    $('button').click(function(){
        validateMe();
    })


    function validateMe(){
      console.log("validate me");
      var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      var error = [];
      //console.log($('#myForm input'));
      // grabs each element and allows us to loop through it
      $('#myForm input').each(function(){
          if ($(this).val().length > 4){
            console.log($(this).attr("name"));
            if(!emailReg.test($(this).val())){
                console.log("invalid email");
            } else {
                console.log("valid email");
            }
        } else {
            error.push($(this).attr("name"));

        }
      })
      if (error.length == 0){ $('#myForm').submit(); }
    };

})

