$(
    function(){
        $('.highlight').css({
            backgroundColor:'red',
            padding:'10px',
            margin:'5px',
            border:'1px solid #ddd'
        })

        $('.highlight').click(function(){
            $(this).hide(5000,function(){
                $(this).next().css('background-color','blue')
            })
        })

})