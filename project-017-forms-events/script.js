$(function(){
    $('button').on('click',submitForm);

    function submitForm(){
        var formValues = $('form').serialize();
        var tempHolder = formValues.split('&');
        outputUpdate(tempHolder);
    }

    function outputUpdate(){
        $('#mainDiv').empty();

        $('input').css('background-color','white');

        $.each(tempHolder, function(index,value){
            var elementName = value.split('=');
            var $el = $('input[name"'+elementName[0]+'"]');

            if ($el.val() == ''){
                $el.css('background-color','red')
            }

            $('#mainDiv').append(elementName[0]+' '+elementName[1]+'<br>');
        })
    }
})