$(function(){
    $('button').on('click',submitForm);

    function submitForm(){
        var $el = $('input[type="text"],input[type="password"]');
        console.log($el);
    }



        

})