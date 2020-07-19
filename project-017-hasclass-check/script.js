$(
    function(){
        // select div inside div
        $('div > div > div').click(function(){
            //console.log($(this).html());
            // get the first child of the mainDiv

            var classVal = $('#input1').val();
            console.log("classVal = "+classVal);

            var backClr = checkClass(classVal) ? 'green' : 'red';

            $('h1').css('background-color',backClr);
        })

        function checkClass(whatClass){

            var classChecker = $('#mainDiv').children().first().hasClass(whatClass)?true:false;
            console.log(classChecker);
            return classChecker;
        }
    }
)