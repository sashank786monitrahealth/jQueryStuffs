$(function(){
    //$('input[type="button"]').on('click', submitForm);
    //$('button').click(submitForm);

    $('button').on('click', submitForm);

    function submitForm(){
        var formValues = $('form').serialize();

        var tempHolder = formValues.split('&')
        console.log(tempHolder);

        $('#mainDiv').empty();

        //console.log('submit clicked');
        $.each(tempHolder, function(index, value){
            console.log(index,value);
            var elementName = value.split('=');
            var $el = $('input[name="'+elementName[0]+'"]');
            if($el.val() == ''){
                $el.css('background-color','red')
            }
            $('#mainDiv').append(elementName[0]+'  '+elementName[1]+'<br>')
        })
    }

    // submitButton is the function we will call on clicking the button


 
})