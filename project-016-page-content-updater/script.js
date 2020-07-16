$(
    function(){
        var counter = 0;
        $('.highlight').click(function(){
            counter++;
            $(this).append('clicked'+counter);
        })
    }
)