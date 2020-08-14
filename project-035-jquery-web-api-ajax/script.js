$(function(){
    $('.btn').css({
        'border': '1px solid black'
        , 'width':'150px'
        , 'padding':'10px'
    })

    $('.btn-1').click(function(e){
        jQuery.ajax({
            url:'https://api.randomuser.me/',
            dataType: 'json',
            success: (function(data){
                     var n = data.results[0].name;
                     console.log(n.first+' '+n.last);
                     console.log(data.results[0].picture.thumbnail);
            })
        })
    })



})