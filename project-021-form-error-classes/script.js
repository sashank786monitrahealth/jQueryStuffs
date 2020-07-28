$(function(){
    $('button').on('click',submitForm);

    function submitForm(){
        var $el = $('input[type="text"],input[type="password"]');

        for(x=0;x<$el.length;x++){
            console.log($el.eq(x).val());
            console.log($el.eq(x).attr('name'))
        }

        //console.log($el);
    }



        

})