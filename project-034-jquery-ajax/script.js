$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
        jQuery.ajax({
            url:'https://raw.githubusercontent.com/sashank786monitrahealth/jsonAJAX/master/db.json',
            dataType: 'json',
            success: (function(data){
                     console.log('SUCCESS');
                     console.log(data);
            })
        }).done(function(rp, status, xhr){
            console.log('DONE');
            console.log(rp);
            console.log(status);

        }).fail(function(){
            console.log('FAIL');
        }).always(function(){
            console.log('ALWAYS');
        })
    })


    $('.btn-2').click(function(e){
        var url = 'https://raw.githubusercontent.com/sashank786monitrahealth/jsonAJAX/master/db.json';
        $.getJSON(url, function(data){
            console.log(data);
        })

    })

})