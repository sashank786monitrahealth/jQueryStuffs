$(
    function(){
        var counter = 0;
        $('.highlight').click(function(){
            counter++;
            $(this).before('BEFORE '+counter);
            $(this).append('clicked '+counter);
            $(this).prepend('Pre '+counter);
        })
    }
)