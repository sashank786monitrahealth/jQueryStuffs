$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
        jQuery.ajax({
            url:'//raw.githubusercontent.com/sashank786monitrahealth/jsonAJAX/master/db.json'
        }).done(function(d){
            console.log('DONE');
            console.log(d);
        })
    })
})