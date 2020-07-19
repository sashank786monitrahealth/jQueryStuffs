$(
    function(){
        // select div inside div
        $('div > div').click(function(){
            console.log($(this).text);
        })
    }
)