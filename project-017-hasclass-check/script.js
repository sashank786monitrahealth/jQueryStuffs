$(
    function(){
        // select div inside div
        $('div > div > div').click(function(){
            //console.log($(this).html());
            // get the first child of the mainDiv

            var backClr = checkClass('highlight') ? 'green' : 'red';

            $('h1').css('background-color',backClr);
        })

        function checkClass(whatClass){

            var classChecker = $('#mainDiv').children().first().hasClass(whatClass)?'Yes':'No';
            console.log(classChecker);
            return classChecker;
        }
    }
)