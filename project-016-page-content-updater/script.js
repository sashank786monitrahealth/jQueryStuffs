$(
    function(){
        var counter = 0;
        $('.highlight').click(function(){
            counter++;
            $(this).before('BEFORE '+counter);
            $(this).append('clicked '+counter);
            $(this).prepend('Pre '+counter);
            $(this).after('AFTER '+counter);
        })

     $('h1').click(function(){
         $(this).before('Hey There !')
     })

    })