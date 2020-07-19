$(
    function(){
        // select div inside div
        $('div > div > div').click(function(){
            //console.log($(this).html());
            // get the first child of the mainDiv
            var classChecker = $('#mainDiv').children().first().hasClass('highlight')?'Yes':'No';
            console.log(classChecker);
        })
    }
)