$(function(){
    //$('input[type="button"]').on('click', submitForm);
    //$('button').click(submitForm);

    $('button').on('click', submitForm);

    function submitForm(){
        var formValues = $('form').serialize();
        console.log(formValues)
        //console.log('submit clicked');
    }

    // submitButton is the function we will call on clicking the button


 
})