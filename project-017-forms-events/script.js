$(function(){
    $('button').on('click',submitForm);

    function submitForm(){
        var formValues = $('form').serialize();
        var tempHolder = formValues.split('&');
        var $a = $('input[name="agree1"]');
        if ($a.prop('checked')){
            outputUpdate(tempHolder);
        } else {
            alert('Please agree to the Terms of Service before you submit.');
        }




        
    }

    function outputUpdate(tempHolder){
        $('#mainDiv').empty();

        $('input').css('background-color','white');

        $.each(tempHolder, function(index,value){
            var elementName = value.split('=');
            var $el = $('input[name="'+elementName[0]+'"]');

            if ($el.val() == ''){
                $el.css('background-color','red')
                $el.after('<div class="error">'+elementName[0]+' value is missing'+'<div>')
            }

            $('#mainDiv').append(elementName[0]+' '+elementName[1]+'<br>');
        })
    }
})