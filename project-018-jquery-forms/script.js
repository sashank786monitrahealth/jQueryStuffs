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
            $('#mainDiv').append(value+'<br>')
        })
    }

    // submitButton is the function we will call on clicking the button


 
})